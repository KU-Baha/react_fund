import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRouters, publicRouters} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Switch>
                {privateRouters.map((router) =>
                    <Route
                        component={router.component}
                        path={router.path}
                        key={router.path}
                        exact={router.exact}
                    />
                )}
                <Redirect to={privateRouters[1].path}/>

            </Switch>
            :
            <Switch>
                {publicRouters.map((router) =>
                    <Route
                        component={router.component}
                        path={router.path}
                        key={router.path}
                        exact={router.exact}
                    />
                )}
                <Redirect to={publicRouters[0].path}/>
            </Switch>
    );
};

export default AppRouter;