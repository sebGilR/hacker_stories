import React from 'react';

const Item = ({ item: {
  title,
  url,
  author,
  num_comments,
  points
} }) => (
    <div>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </div>
  );

export default Item;