import React from "react";
import styled from "styled-components/macro";
import { toggleTodo } from "../Redux/actions";
import {useDispatch } from 'react-redux';


const StyledListItemRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    align-content: center;
    box-shadow: 0.1em 0.1em 0.8em #bdbbbb;
    border-radius: 0.5em;
    margin: 1.2em;
    align-items: center;
    background-color: ${prop => prop.completed ? '#141414' : '#4C4C4C'};
`
const StyledListItem = styled.span`
    margin-left: 2em;
    text-decoration: ${prop => prop.completed ? "line-through" : null};
`

const StyledCompletedButton = styled.button`
    color: white;
    font-size: 1em;
    margin: 0.7em;
    border: 0;
    border-radius: 0.5em;
    background-color: #202020;
    width: 9em;
    height: 2em;
`

const ListItem = ({action, completed, index}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleTodo(index))
    }

    return(
        <StyledListItemRow completed={completed}>
            <StyledListItem completed={completed}>{action}</StyledListItem>
            <StyledCompletedButton completed={completed} onClick={handleClick}>
                {completed ? "Undo" : "Completed it!"}
            </StyledCompletedButton>
        </StyledListItemRow>
    )
}

export default ListItem
