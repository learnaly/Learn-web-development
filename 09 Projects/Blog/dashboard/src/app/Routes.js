import React, { useState, useEffect, useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthService } from './services';
import { redirectTo } from './utils';

// Sync load
import Signin from './modules/Signin';
import Signup from './modules/Signup';
import Main from './modules/Main';

const Routes = () => {
    // eslint-disable-next-line
    const [auth, setAuth] = useState();

    useEffect(() => {
        const authSub = AuthService.authSub.subscribe(value => value && setAuth(value));

        return () => {
            authSub.unsubscribe();
        };
    }, []);

    const routes = useMemo(() => [
        ...(AuthService.isLoggedIn ?
            [
                { path: '/', component: Main, options: {} }
            ] :
            [
                { path: '/signin', component: Signin, options: {} },
                { path: '/signup', component: Signup, options: {} },
            ]),
        // eslint-disable-next-line
    ], [AuthService.isLoggedIn]);

    const redirect_to = redirectTo();
    const pathname = window.location.pathname;
    let routeRedirectNotSignedIn = '/signin';

    if (pathname.indexOf('/signin') === -1 && pathname.indexOf('/signup') === -1 && pathname !== '/' && redirect_to) routeRedirectNotSignedIn += `?redirect_to=${redirect_to}`;

    return (
        <Switch>
            {routes.map((item, index) =>
                <Route
                    path={item.path}
                    key={index}
                    component={props => (
                        <item.component {...props} />
                    )}
                    {...item.options}
                />
            )}

            <Redirect
                from='*'
                to={AuthService.isLoggedIn ? '/' : routeRedirectNotSignedIn}
            />
        </Switch>
    );
};

export default Routes;
