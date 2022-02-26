import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components/macro";
import ListItem from "./ListItem";
import AddToDoItem from "./AddToDoItem";

const StyledBox = styled.div`
font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #08396b;
  margin-top: 4em;
  margin-left: 15em;
  margin-right: 15em;
  align-self: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px grey;
`

const MainScreen = () => {
    const item = {action: "clean kitchen", completed: false}
    const item2 = {action: "load dishwasher", completed: true}

    const [items, setItems] = useState([item, item2])

    const clickAdd = (item) => {
        setItems([...items, { action: item, completed: false }])
    }

    return(
        <StyledBox>
            <Header />
            <AddToDoItem clickAdd={clickAdd}/>
            { items.map((item, index) => { 
                return <ListItem action={item.action} completed={item.completed} key={index} />
                }
            )}
        </StyledBox>
    )
}

export default MainScreen