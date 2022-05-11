import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoCounter = () => {

  const {totalTodos, completedTodos} = useContext(TodoContext);

  return (
    <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
