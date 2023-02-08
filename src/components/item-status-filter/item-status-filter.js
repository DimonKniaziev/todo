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
            const fontStyle = isActive ? 'bg-cyan-400 font-bold text-white' : '';
            return (
                <button type="button" className={`${fontStyle} ${borderStyle} w-full`} key={name} onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            );
        });

        return (
            <div className="flex justify-between w-60 border rounded-md">
                {buttons}
            </div>
        );
    }
}