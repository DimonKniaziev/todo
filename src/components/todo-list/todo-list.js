import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ( {todos, onDeleted, onToggleImportant, onToggleDone} ) => {
    const todoItems = todos.map((item) => {
        const {id, ...itemProps} = item;
      
        return (
            <li key = {id} className="">
                <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} onToggleImportant={() => onToggleImportant(id)} onToggleDone={() => onToggleDone(id)}/>
            </li>
        );
    });

    return (
      <ul className="mt-5 border-2 border-b-0 rounded-md">
        {todoItems}
      </ul>
    );
  };

  export default TodoList;