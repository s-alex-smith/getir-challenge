import React, { useEffect } from "react";
import Header from "./Header";
import Sort from "./Sort";
import styled from "styled-components/macro";
import ListItem from "./ListItem";
import AddToDoItem from "./AddToDoItem";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, getTodo, sortTodoAction, sortTodoActionDesc, sortTodoComplete, sortTodoIncomplete } from "../Redux/actions";

const StyledPage = styled.div`
    background-color: #CFDEE7;
    height: 100%;
    width: 100%;
    position: absolute;
`

const StyledBox = styled.div`
font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
  margin: 4em 20em 0 20em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.15em solid #0A369D;
  border-radius: 0.5em;
  background-color: #5E7CE2;
  padding: 2em;
`

const MainScreen = () => {
    const data = useSelector(state => state);
    const dispatch = useDispatch()
    const items = data.todos.items

    useEffect(() => {
        dispatch(getTodo())
    }, [dispatch])

    const clickAdd = (item) => {
        const newItem = {action: item, completed: false, author: "kitty purry"}
        dispatch(addTodo(newItem))
    }

    const sortList = (sortBy) => {
        if (sortBy === "action") {
            dispatch(sortTodoAction())
        } else if (sortBy === "completed") {
            dispatch(sortTodoComplete())
        } else if (sortBy === "incomplete") {
            dispatch(sortTodoIncomplete())
        } else if (sortBy === "action-desc") {
            dispatch(sortTodoActionDesc())
        }
    }

    return(
        <StyledPage>
         <StyledBox>
            <Header />
            <AddToDoItem clickAdd={clickAdd}/>
            <Sort sortList={sortList}/>
            { items.map((item, index) => { 
                return <ListItem action={item.action} completed={item.completed} key={index} index={index} />
                }
            )}
         </StyledBox>
        </StyledPage>
    )
}

export default MainScreen