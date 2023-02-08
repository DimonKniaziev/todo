import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {
    render () {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;
        
        let classNames = 'text-lg';
        if(done) {
            classNames += ' line-through decoration-black';
        }
        if(important) {
            classNames += ' text-cyan-400 font font-medium';
        }

        return (
            <div className="todo-list-item">
                <div>
                    <span className={`${classNames} justify-self-start ml-3`} onClick={onToggleDone}>
                        { label }
                    </span>
                </div>
                <div className="w-22">
                    <button type="button" className="text-green-500 border-green-500" onClick={onToggleImportant}>
                        <i className="bi bi-exclamation"></i>
                    </button>
                    <button type="button" className="text-red-500 border-red-500" onClick={onDeleted}>
                        <i className="bi bi-trash"></i>
                    </button>  
                </div>
            </div>
        );
    };
}