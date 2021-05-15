import React from 'react';
import { CssBaseline } from '@material-ui/core';

import 'nprogress/nprogress.css';

import { ErrorBoundary } from '../../';

export default function Middleware(props) {
    return (
        <ErrorBoundary>
            <CssBaseline />

            {props.children}
        </ErrorBoundary>
    );
}
