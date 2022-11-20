import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
import styled from "styled-components";
import lazyRetry from "utils/lazyRetry";
const Signup = loadable(() => lazyRetry(() => import("pages/Signup/Signup")));
const Home = loadable(() => lazyRetry(() => import("pages/Home/Home")));
const Login = loadable(() => lazyRetry(() => import("pages/Login/Login")));
const OrgSignup = loadable(() =>
  lazyRetry(() => import("pages/Signup/OrgSignup"))
);
const Detail = loadable(() =>
  lazyRetry(() => import("pages/Organization/Detail"))
);

const StructureOuter = () => {
  return (
    <Container>
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/signup" component={Signup} />
      <Route exact path="/home/orgsignup" component={OrgSignup} />
      <Route exact path="/home/login" component={Login} />
      <Route exact path="/home/detail" component={Detail} />
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
