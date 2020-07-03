import React, { useState } from 'react';
import List from './List';
import InputWithLabel from './Input';

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );

  React.useEffect(key => {
    localStorage.setItem(key, value)
  }, [value]);

  return [value, setValue]
}

const App = () => {
  const initialStories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const getAsyncStories = () =>
    new Promise(resolve =>
      setTimeout(() =>
        resolve({ data: { stories: initialStories } }),
        2000
      )
    );

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', '');

  const [stories, setSories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  React.useEffect(() => {
    setIsLoading(true);

    getAsyncStories()
      .then(result => {
        setSories(result.data.stories);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  const handleRemoveStory = item => {
    const newStories = stories.filter(
      story => item.objectID !== story.objectID
    )

    setSories(newStories);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  };

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase()
      .includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />
      {isError && <p>Something went wrong ...</p>}
      {
        isLoading ?
          <p>Loading...</p> :
          <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      }

    </div>
  );
};

export default App;
