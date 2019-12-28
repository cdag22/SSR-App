import React, { lazy, Suspense, useEffect, useState } from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "../assets/styles/main.scss";
import { renderRoutes } from "react-router-config";
import { Switch } from "react-router-dom";

const App = ({ route }) => {
  // this is my dynamically loaded component
  // let Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard", webpackPreload: true */ '../Dashboard/Dashboard'));

  // I use hooks to determine if ssr is done and i'm on the browser
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    // this is like componentDidMount
    setIsBrowser(true);
  }, []);
  return (
    <section className="page-container">
      {isBrowser ? (
        // if i'm in the browser i use Suspence to wait for my component
        <Suspense fallback={"Loading..."}>
          <Switch>{renderRoutes(route.routes)}</Switch>
        </Suspense>
      ) : (
        // else i just show a loading label
        "Loading..."
      )}
    </section>
  );
};

export default withStyles(s)(App);
