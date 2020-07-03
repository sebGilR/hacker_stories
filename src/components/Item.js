import React from 'react';

const Item = ({ item, onRemoveItem }) => {
  const { url, title, author, num_comments, points } = item
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };


  return (
    <div>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
      <span>
        <button type="button" onClick={handleRemoveItem}>
          Dismiss
</button>
      </span>
    </div>

  )
}

export default Item;