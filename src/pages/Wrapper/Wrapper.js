import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import InnerNav from "./Components/InnerNav";
const Wrapper = (props) => {
  return (
    <>
      <InnerNav />
      <Content pathname={props.location.pathname}>{props.children}</Content>
    </>
  );
};

export default withRouter(Wrapper);

const Content = styled.div`
  position: fixed;
  top: ${({ pathname }) => (pathname === "/home" ? 183 : 130)}px;
  left: 0px;
  right: 0px;
  bottom: 0;
  background-color: white;

  /* @media ${({ theme }) => theme.screenSizes.mobile} {
    left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? "52px" : "0")};
  } */
`;
