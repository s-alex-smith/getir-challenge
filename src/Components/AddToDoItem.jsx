import React, { useState } from "react";
import styled from "styled-components/macro";
import { func } from 'prop-types';

const AddToDoItem = ({ clickAdd }) => {
    const [input, setInput] = useState("")

    const updateInput = input => {
        setInput(input.target.value);
      };

      const handleAddTodo = () => {
        // this.props.addTodo(this.state.input);
        // addItem({action: item, completed: false})
        // setInput("");
        clickAdd(input)
      };

    return(
        <>
            <input
                onChange={updateInput}
                value={input} type="text"
            />
            <button className="add-todo" onClick={handleAddTodo}>
                Add Todo
            </button>
        </>
    )
}

AddToDoItem.propTypes = {
    clickClone: func
    }
    
AddToDoItem.defaultPtops = {
      clickClone: () => {}
    }

export default AddToDoItem