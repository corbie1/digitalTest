import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { App } from './App';
import routeConfig from './config/routes';
import { Layout } from './components/pages/layout';

const WrappedComponent = (Component) => () => (
    <App>
        <Component />
    </App>
);

export default (
    <Switch>
        <Route
            exact={true}
            path={routeConfig.INDEX}
            component={WrappedComponent(Layout)}

        />
        <Route
            exact={true}
            path="/group/:id"
            component={WrappedComponent(Layout)}
        />
    </Switch>
)