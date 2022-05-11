import React, {createContext, useEffect, useState } from 'react'
import  { useLocalStorage } from './useLocalStorage'

const TodoContext = createContext(); // React context component


const TodoProvider = (props) => {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = useState('');
      const [openPortal, setOpenPortal] = useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos);
        setOpenPortal(false);
      };
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openPortal,
            setOpenPortal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export {TodoProvider, TodoContext}