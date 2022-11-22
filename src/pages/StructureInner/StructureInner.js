import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
import lazyRetry from "utils/lazyRetry";
const Detail = loadable(() =>
  lazyRetry(() => import("pages/Organization/OrganizationDescription"))
);
const Wrapper = loadable(() =>
  lazyRetry(() => import("pages/Wrapper/Wrapper"))
);

const OrganizationList = loadable(() =>
  lazyRetry(() => import("pages/OrganizationList/OrganizationList"))
);
const BackendTest = loadable(() =>
  lazyRetry(() => import("pages/BackendTest/BackendTest"))
);

const StructureInner = () => {
  return (
    <Wrapper>
      <Route exact path="/organizations" component={OrganizationList} />
      <Route exact path="/backendtest" component={BackendTest} />
      <Route path="/organization/:id" component={Detail} />
    </Wrapper>
  );
};

export default StructureInner;
