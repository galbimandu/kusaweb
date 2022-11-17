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
// import { axios } from "common/ApiAxios";
const queryClient = new QueryClient();
const NotFound = loadable(() => import("./pages/Errors/NotFound"));

const StructureOuter = loadable(() =>
  import("pages/StructureOuter/StructureOuter")
);
const StructureInner = loadable(() =>
  import("pages/StructureInner/StructureInner")
);

const Routes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <Router>
        <GlobalStyle />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Redirect to={`/home/${props.location.search}`} />;
              }}
            />
            <Route path="/home" component={StructureOuter} />
            <Route path="/" component={StructureInner} />
            <Route exact path="/404" component={NotFound} />
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </ErrorBoundary>
      </Router>
    </QueryClientProvider>
  );
};

export default Routes;
