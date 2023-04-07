import React, {useState} from "react";
import "./item-add-form.scss";

const ItemAddForm = ({onItemAdded}) => {
    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdded(label);
        setLabel('');
    }

    return (
        <form className="item-add-form" onSubmit={onSubmit}>
            <input type="text" className="input" onChange={onLabelChange} placeholder="What needs to be done" value={label}>
            </input>
            <input type="submit" value="Add Item" className="submit">
            </input>
        </form>
    );
}

export default ItemAddForm;