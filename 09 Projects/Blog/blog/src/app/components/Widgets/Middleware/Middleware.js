import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { DefaultSeo } from 'next-seo';

import { ErrorBoundary } from '../../';

export default function Middleware(props) {

    return (
        <ErrorBoundary>
            <DefaultSeo
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    site_name: 'Qoolpage',
                }}
            />

            <CssBaseline />

            {props.children}
        </ErrorBoundary>
    );
}
