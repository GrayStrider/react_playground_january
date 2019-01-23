import * as React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import Hello from "./containers/Hello";

export const AppRouter: React.ReactFragment = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path={'/'} component={Hello}/>
                <Route exact={true} path={'/app'} component={App}/>
            </Switch>
        </BrowserRouter>
    )

};
