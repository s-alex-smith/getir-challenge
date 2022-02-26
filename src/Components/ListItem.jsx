import React from "react";
import styled from "styled-components/macro";

const StyledListItemRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    width: 100%;
    margin: 0.5em;
`
const StyledListItem = styled.text`
    padding-left: 2em;
`

const StyledCompletedListItem = styled.text`
    text-decoration: line-through;
    padding-left: 2em;
`

const ListItem = ({action, completed}) => {

    const handleClick = (completed) => {
        
    }

    return(
        <StyledListItemRow>
            {completed ? <StyledCompletedListItem>{action}</StyledCompletedListItem> : <StyledListItem>{action}</StyledListItem>}
        </StyledListItemRow>
    )
}

export default ListItem