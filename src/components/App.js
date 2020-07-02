import React from 'react';
import List from './List';
import Search from './Search';

const useSemiPersistentState = () => {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''
  );

  React.useEffect(() => {
    localStorage.setItem('search', searchTerm)
  }, [searchTerm]);

  return [searchTerm, setSearchTerm]
}

const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = useSemiPersistentState();

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

      <Search onSearch={handleSearch} search={searchTerm} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

export default App;
