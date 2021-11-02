import React, {useState} from 'react';

const BoxForm = props => {
    
    const [color, setColor] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        props.onNewBox(color);
        setColor("");
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label>Color </label>
            <input type = 'text' onChange = {e => setColor(e.target.value)} value = {color} />
            <button>Add</button>
        </form>
    );

};

export default BoxForm;