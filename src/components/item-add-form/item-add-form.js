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
            <form className="item-add-form" onSubmit={this.onSubmit}>
                <input type="text" className="input  focus:outline-cyan-400" onChange={this.onLabelChange} placeholder="What needs to be done" value={this.state.label}>
                </input>
                <input type="submit" value="Add Item" className="submit">
                </input>
            </form>
        );
    }
}