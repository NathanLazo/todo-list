import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function UI({
    total,
    completed,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
  return (
    <>
    <TodoCounter
      total={total}
      completed={completed}
    />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>

    <CreateTodoButton />
  </>
  )
}

export default UI