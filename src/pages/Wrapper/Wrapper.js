import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import InnerNav from "./Components/InnerNav";
const Wrapper = (props) => {
  return (
    <PageWrapper>
      <InnerNav />
      <Content pathname={props.location.pathname}>{props.children}</Content>
    </PageWrapper>
  );
};

export default withRouter(Wrapper);

const PageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Content = styled.div`
  /* margin-top: ${({ pathname }) => (pathname === "/home" ? 183 : 130)}px; */
  background-color: white;
  z-index: 1;
  /* @media ${({ theme }) => theme.screenSizes.mobile} {
    left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? "52px" : "0")};
  } */
`;
