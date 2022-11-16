import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrapper = (props) => {
  return (
    <>
      {/* <MainNav

      ></MainNav>
      <Nav

      /> */}
      <Content>{props.children}</Content>
    </>
  );
};

export default withRouter(Wrapper);

const Content = styled.div`
  position: fixed;
  top: 52px;
  left: 0px;
  right: 0px;
  bottom: 0;
  background-color: white;

  /* @media ${({ theme }) => theme.screenSizes.mobile} {
    left: ${({ sidebarIsOpen }) => (sidebarIsOpen ? "52px" : "0")};
  } */
`;
