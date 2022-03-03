import React from "react";
import styled from "styled-components/macro";
import { deleteTodo, toggleTodo } from "../Redux/actions";
import {useDispatch } from 'react-redux';


const StyledListItemRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    box-shadow: 0.1em 0.1em 0.8em #bdbbbb;
    border-radius: 0.5em;
    border: 0.15em solid #5E7CE2;
    margin: 1.2em 0;
    align-items: center;
    background-color: ${prop => prop.completed ? '#0A369D' : '#CFDEE7'};
`
const StyledListItem = styled.span`
    margin-left: 2em;
    text-decoration: ${prop => prop.completed ? "line-through" : null};
    color: ${prop => prop.completed ? 'white' : '#0A369D' }; 
`

const StyledButton = styled.button`
    color: white;
    font-size: 0.8em;
    margin: 0.7em;
    border-radius: 0.5em;
    background-color: #0A369D;
    border: 0.1em solid #CFDEE7;
    width: 8em;
    height: 2em;
`

const StyledButtonContainer = styled.span`
    margin-right: 2em;
`

const StyledRemoveButton = styled.button`
    background-color: #CFDEE7;
    border: 0.1em solid #0A369D;
    color: #0A369D;
    font-weight: bold;
`

const ListItem = ({action, completed, index}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleTodo(index))
    }
    const handleClickRemove = () => {
        dispatch(deleteTodo(index))
    }

    return(
        <StyledListItemRow completed={completed}>
            <StyledListItem completed={completed}>{action}</StyledListItem><StyledButtonContainer>
            <StyledButton completed={completed} onClick={() => handleClick()}>
                {completed ? "Undo" : "Completed it!"}
            </StyledButton>
            <StyledRemoveButton onClick={() => handleClickRemove()}>X</StyledRemoveButton>
            </StyledButtonContainer>
        </StyledListItemRow>
    )
}

export default ListItem
