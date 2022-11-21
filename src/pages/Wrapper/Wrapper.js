import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import InnerNav from "./Components/InnerNav";
const Wrapper = (props) => {
  return (
    <>
      <InnerNav />
      <Content>{props.children}</Content>
    </>
  );
};

export default withRouter(Wrapper);

const Content = styled.div`
  position: fixed;
  top: 56px;
  left: 0px;
  right: 0px;
  bottom: 0;
  background-color: white;
  overflow: scroll;

  /* @media ${({ theme }) => theme.screenSizes.mobile} {
    left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? "52px" : "0")};
  } */
`;
