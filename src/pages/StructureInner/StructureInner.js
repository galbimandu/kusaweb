import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
import lazyRetry from "utils/lazyRetry";
const Detail = loadable(() =>
  lazyRetry(() => import("pages/Organization/Detail"))
);
const Wrapper = loadable(() =>
  lazyRetry(() => import("pages/Wrapper/Wrapper"))
);

const Organization = loadable(() =>
  lazyRetry(() => import("pages/Organization/Organization"))
);

const BackendTest = loadable(() =>
  lazyRetry(() => import("pages/BackendTest/BackendTest"))
);

const StructureInner = () => {
  return (
    <Wrapper>
      <Route exact path="/organization" component={Organization} />
      <Route exact path="/backendtest" component={BackendTest} />
      <Route path="/organization/:id" component={Detail} />
    </Wrapper>
  );
};

export default StructureInner;
