import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

function TodoSearch() {

  const { searchValue, setSearchValue } = useContext(TodoContext);


  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Search your todos"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
