import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import loadable from "@loadable/component";
import { ReactQueryDevtools } from "react-query/devtools";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./modules/Global/token";
import { notification } from "./ui";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./style/GlobalStyle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "utils/ErrorFallback";
// import { axios } from "common/ApiAxios";
const queryClient = new QueryClient();
const NotFound = loadable(() => import("./pages/Errors/NotFound"));
const Home = loadable(() => import("./pages/Home/Home"));
const Signup = loadable(() => import("./pages/Signup/Signup"));
const Organization = loadable(() =>
  import("./pages/Organization/Organization")
);

const Routes = () => {
  const token = useSelector((state) => state.token);

  useEffect(() => {
    try {
      localStorage.getItem("token") &&
        dispatch(setToken(localStorage.getItem("token")));
    } catch (error) {
      notification("warning", "Plz log in", "", "topRight", 12);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // axios.interceptors.request.use(
  //   function (config) {
  //     if (token) {
  //       config.headers["Authorization"] = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   function (error) {
  //     // 요청 에러 직전 호출됩니다.
  //     return Promise.reject(error);
  //   }
  // );

  const dispatch = useDispatch();
  // useEffect(() => {
  //   //GA
  //   ReactGA.initialize(TRACKING_ID, { debug: false });
  // }, []);

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
            <Route path="/home" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/organization" component={Organization} />
            <Route path="/" component={Home} />
            <Route exact path="/404" component={NotFound} />
            <Route render={() => <Redirect to="/home" />} />
            {/* <Redirect to="/404" /> */}
          </Switch>
        </ErrorBoundary>
      </Router>
    </QueryClientProvider>
  );
};

export default Routes;
