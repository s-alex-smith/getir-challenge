import React, { useState } from "react";
import styled from "styled-components/macro";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const StyledButton = styled.button`
    color: white;
    font-size: 1em;
    padding: 0.25em 1em;
    border-radius: 0.5em;
    background-color: #202020;
    width: 9em;
    height: 2.5em;
`

const StyledInput = styled.input`
    height: 2.5em;
    width: 20%;
    margin-right: 3em;
    border-radius: 0.5em;
    color: white;
    background-color: #202020;
`

const AddToDoItem = ({ clickAdd }) => {
    const [input, setInput] = useState("")

    const updateInput = input => {
        setInput(input.target.value);
      };

      const handleClickAddTodo = () => {
        clickAdd(input)
        setInput("")
      };

    return(
        <StyledContainer>
            <StyledInput
                onChange={updateInput}
                value={input} type="text"
            />
            <StyledButton className="add-todo" onClick={handleClickAddTodo}>
                Add Todo
            </StyledButton>
        </StyledContainer>
    )
}

export default AddToDoItem