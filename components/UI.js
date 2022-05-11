import React, { useContext } from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import  { TodoContext } from './TodoContext';
import { Portal } from '../HOC/Portal';
import  { TodoForm } from './TodoForm';

function UI() {

  const {
    error,
    loading,
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openPortal,
    setOpenPortal,
  } = useContext(TodoContext);

  return (
    <>
    <TodoCounter/>

    <TodoSearch/>

    <TodoList>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {!loading && !searchedTodos.length && <p>Create your first TODO</p>}
        {!loading && searchedTodos.length > 0 && 
          searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))
        }
    </TodoList>

    {
      openPortal && (
        <Portal>
          <div className='ModalBackground'>
            <TodoForm />
          </div>
        </Portal>
      )
    }

    <CreateTodoButton
      openPortal={openPortal}
      setOpenPortal={setOpenPortal}
    />
  </>
  )
}

export default UI