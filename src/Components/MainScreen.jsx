import React, { useEffect } from "react";
import Header from "./Header";
import styled from "styled-components/macro";
import ListItem from "./ListItem";
import AddToDoItem from "./AddToDoItem";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, getTodo } from "../Redux/actions";

const StyledPage = styled.div`
    background-color: #202020;
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
  border-radius: 0.5em;
  background-color: #4C4C4C;
`

const MainScreen = () => {
    const data = useSelector(state => state);
    const dispatch = useDispatch()
    const items = data.todos.items

    useEffect(() => {
        dispatch(getTodo())
    }, [])

    const clickAdd = (item) => {
        const newItem = {action: item, completed: false, author: "alex"}
        dispatch(addTodo(newItem))
    }
    
    return(
        <StyledPage>
         <StyledBox>
            <Header />
            <AddToDoItem clickAdd={clickAdd}/>
            { items.map((item, index) => { 
                return <ListItem action={item.action} completed={item.completed} key={index} index={index} />
                }
            )}
         </StyledBox>
        </StyledPage>
    )
}

export default MainScreen