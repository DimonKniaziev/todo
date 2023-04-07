import React from "react";
import './todo-list-item.scss';

const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, important, done}) => {
    
    let classNames = '';

    if(done) {
        classNames += ' done';
    }
    if(important) {
        classNames += ' important';
    }

    return (
        <div className="todo-list-item">
            <div>
                <span className={classNames} onClick={onToggleDone}>
                    { label }
                </span>
            </div>
            <div className="w-22">
                <button type="button" className="important-btn" onClick={onToggleImportant}>
                    <i className="bi bi-exclamation"></i>
                </button>
                <button type="button" className="delete-btn" onClick={onDeleted}>
                    <i className="bi bi-trash"></i>
                </button>  
            </div>
        </div>
    );
}

export default TodoListItem;