import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
import lazyRetry from "utils/lazyRetry";
const Wrapper = loadable(() =>
  lazyRetry(() => import("pages/Wrapper/Wrapper"))
);

const Organization = loadable(() =>
  lazyRetry(() => import("pages/Organization/Organization"))
);

const StructureInner = () => {
  return (
    <Wrapper>
      <Route exact path="/organization" component={Organization} />
    </Wrapper>
  );
};

export default StructureInner;
