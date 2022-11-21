import React from "react";
import { Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import styled from "styled-components";
import lazyRetry from "utils/lazyRetry";
const Signup = loadable(() => lazyRetry(() => import("pages/Signup/Signup")));
const Home = loadable(() => lazyRetry(() => import("pages/Home/Home")));
const Login = loadable(() => lazyRetry(() => import("pages/Login/Login")));
const OrgSignup = loadable(() =>
  lazyRetry(() => import("pages/Signup/OrgSignup"))
);
const Wrapper = loadable(() =>
  lazyRetry(() => import("pages/Wrapper/Wrapper"))
);

const StructureOuter = () => {
  return (
    <Wrapper>
      <Route exact path="/home/" render={() => <Redirect to="/home" />} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/signup" component={Signup} />
      <Route exact path="/home/orgsignup" component={OrgSignup} />
      <Route exact path="/home/login" component={Login} />
    </Wrapper>
  );
};
export default StructureOuter;
