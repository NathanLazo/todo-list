import React, {useContext, useState} from 'react'
import {TodoContext} from './TodoContext'

const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenPortal,
    } = useContext(TodoContext);

    const onCancel = () => {
        setOpenPortal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
    }

  return (
    <form onSubmit={onSubmit} >
      <label>Escribe tu nuevo To Do</label>
      <textarea
        value = {newTodoValue}
        onChange = {(e) => setNewTodoValue(e.target.value)}
        placeholder = "Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>
  )
}

export { TodoForm }