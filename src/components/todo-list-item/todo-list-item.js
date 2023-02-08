import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component {
    render () {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;
        
        let classNames = 'text-lg';
        if(done) {
            classNames += ' line-through';
        }
        if(important) {
            classNames += ' text-cyan-400 font font-medium';
        }

        return (
            <div className="flex justify-between border-b-2 rounded-md p-2 items-baseline flex-wrap">
                <div>
                    <span className={`${classNames} justify-self-start ml-3`} onClick={onToggleDone}>
                        { label }
                    </span>
                </div>
                <div className="w-22">
                    <button type="button" className="border-2 bor h-10 w-10 mr-2 rounded-md text-green-500 border-green-500" onClick={onToggleImportant}>
                        <i className="bi bi-exclamation"></i>
                    </button>
                    <button type="button" className="border-2 h-10 w-10 rounded-md text-red-500 border-red-500" onClick={onDeleted}>
                        <i className="bi bi-trash"></i>
                    </button>  
                </div>
            </div>
        );
    };
}