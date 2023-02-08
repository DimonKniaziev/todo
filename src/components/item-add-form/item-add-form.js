import React, {Component} from "react";
import "./item-add-form.css"

export default class ItemAddForm extends Component {    
    state = {
        label: ''
    };
    
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    }
    
    render() {
        return (
            <form className="flex justify-between mt-2" onSubmit={this.onSubmit}>
                <input type="text" className="border-2 rounded-md w-full mr-1 p-2" onChange={this.onLabelChange} placeholder="What needs to be done" value={this.state.label}>
                </input>
                <button className="border-2 w-24 h-11 rounded-md shrink-0">
                    Add Item
                </button>
            </form>
        );
    }
}