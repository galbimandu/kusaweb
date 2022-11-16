import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
import styled from "styled-components";
import lazyRetry from "utils/lazyRetry";
const Signup = loadable(() => lazyRetry(() => import("pages/Signup/Signup")));
const Home = loadable(() => lazyRetry(() => import("pages/Home/Home")));

const StructureOuter = () => {
  return (
    <Container>
      <Route path="/home" component={Home} />
      <Route path="/home/signup" component={Signup} />
    </Container>
  );
};
export default StructureOuter;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
