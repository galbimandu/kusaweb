import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import loadable from "@loadable/component";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./style/GlobalStyle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "utils/ErrorFallback";
import lazyRetry from "utils/lazyRetry";

// import { axios } from "common/ApiAxios";
const queryClient = new QueryClient();
const NotFound = loadable(() => import("./pages/Errors/NotFound"));

const Wrapper = loadable(() =>
  lazyRetry(() => import("pages/Wrapper/Wrapper"))
);
const Signup = loadable(() => lazyRetry(() => import("pages/Signup/Signup")));
const Home = loadable(() => lazyRetry(() => import("pages/Home/Home")));
const Login = loadable(() => lazyRetry(() => import("pages/Login/Login")));
const AboutUs = loadable(() =>
  lazyRetry(() => import("pages/AboutUs/AboutUs"))
);
const OrgSignup = loadable(() =>
  lazyRetry(() => import("pages/Signup/OrgSignup"))
);
const Detail = loadable(() =>
  lazyRetry(() => import("pages/Organization/OrganizationDescription"))
);
const OrganizationList = loadable(() =>
  lazyRetry(() => import("pages/OrganizationList/OrganizationList"))
);
const BackendTest = loadable(() =>
  lazyRetry(() => import("pages/BackendTest/BackendTest"))
);
const Galbros = loadable(() =>
  lazyRetry(() => import("pages/Galbros/Galbros"))
);
const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <Router>
        <GlobalStyle />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Switch>
            <Wrapper>
              <Route
                exact
                path="/"
                render={(props) => {
                  return <Redirect to={`/home/${props.location.search}`} />;
                }}
              />
              <Route
                exact
                path="/home/"
                render={() => <Redirect to="/home" />}
              />
              <Route exact path="/home" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/orgsignup" component={OrgSignup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/aboutus" component={AboutUs} />
              {/* <Route path="/home" component={StructureOuter} />
              <Route path="/" component={StructureInner} /> */}
              <Route exact path="/404" component={NotFound} />
              <Route exact path="/organizations" component={OrganizationList} />
              <Route exact path="/backendtest" component={BackendTest} />
              <Route exact path="/organizations/:id" component={Detail} />
              <Route exact path="/Galbros" component={Galbros} />
            </Wrapper>
          </Switch>
        </ErrorBoundary>
      </Router>
    </QueryClientProvider>
  );
};

export default Routes;
