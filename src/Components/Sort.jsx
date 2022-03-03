import React from "react";
import styled from "styled-components";

const StyledSortRow = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em 0;
`

const StyledButton = styled.button`
    color: white;
    font-size: 1em;
    margin: 0.7em;
    border: 0;
    border-radius: 0.5em;
    background-color: #0A369D;
    border: 0.2em solid #0A369D;
    width: 9em;
    height: 1.5em;
`

const Sort = ({sortList}) => {

    const handleSortClick = (sortBy) => {
        sortList(sortBy)
    }

    return (
        <StyledSortRow>
            <StyledButton onClick={() => handleSortClick("action")}>Sort: A-Z</StyledButton>
            <StyledButton onClick={() => handleSortClick("action-desc")}>Sort: Z-A</StyledButton>
            <StyledButton onClick={() => handleSortClick("completed")}>Sort: Done</StyledButton>
            <StyledButton onClick={() => handleSortClick("incomplete")}>Sort: To do</StyledButton>
        </StyledSortRow>
    )
}

export default Sort;