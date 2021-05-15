import React, { useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import { lazy, lazyLoad } from '../../utils';
import { AuthService } from '../../services';

// Async
const Posts = lazy(() => import('./containers/Posts'));
const Post = lazy(() => import('./containers/Post'));
const PostNew = lazy(() => import('./containers/PostNew'));

const Routes = () => {
    const routes = useMemo(() => {
        return [
            { path: '/posts', component: lazyLoad(Posts), options: { exact: true } },
            { path: '/posts/new', component: lazyLoad(PostNew), options: { exact: true } },
            { path: '/posts/:id', component: lazyLoad(Post), options: { exact: true } }
        ];

        // eslint-disable-next-line
    }, [AuthService.isLoggedIn, window.location.pathname]);

    return (
        <Switch>
            {routes.map((item, index) => (
                <Route
                    path={item.path}
                    key={index}
                    component={props => (
                        <item.component {...props} />
                    )}
                    {...item.options}
                />
            ))}

            <Redirect
                from='*'
                to='/posts'
            />
        </Switch>
    );
};

export default Routes;
