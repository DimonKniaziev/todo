import React, {Component} from "react";
import './todo-list-item.scss';

export default class TodoListItem extends Component {
    render () {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;
        
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
    };
}