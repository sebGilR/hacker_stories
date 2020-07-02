import React from 'react';
import Item from './Item';

const List = ({ list }) =>
  list.map(item => <Item key={item.objectID} item={item} />);

export default List;