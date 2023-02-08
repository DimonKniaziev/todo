import React, {Component} from "react";
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    buttons = [
        {name: 'all', label: 'All', borderStyle: ' border-r-2 rounded-l-md'},
        {name: 'active', label: 'Active', borderStyle: 'border-r-2'},
        {name: 'done', label: 'Done', borderStyle: 'rounded-r-md'}
    ];
    
    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label, borderStyle}) => {
            const isActive = filter === name;
            const fontStyle = isActive ? 'active' : '';
            return (
                <button type="button" className={`${fontStyle} ${borderStyle} w-full`} key={name} onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            );
        });

        return (
            <div className="item-status-filter">
                {buttons}
            </div>
        );
    }
}