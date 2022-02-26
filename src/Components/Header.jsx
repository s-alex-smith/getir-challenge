import React from "react";
import styled from "styled-components/macro";

const StyledHeader = styled.header`
text-decoration: underline;
`

const Header = () => {
  return (
    <StyledHeader>
      <h1>To Do List</h1>
    </StyledHeader>
  );
};

export default Header;
