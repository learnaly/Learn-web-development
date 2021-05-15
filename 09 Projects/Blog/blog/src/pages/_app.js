import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import NextNprogress from 'nextjs-progressbar';

import { GetTheme, DEFAULT_THEME } from '../app/utils';
import { Middleware, App } from '../app/components';
import { StorageService } from '../app/services';

export default function _App(props) {
    const isDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');
    const [userTheme, setUserTheme] = useState(DEFAULT_THEME);

    const { Component, pageProps } = props;

    useEffect(() => {
        StorageService.init(window.localStorage);

        const ut = StorageService.get('userTheme');

        if (ut) StorageService.setUserTheme(ut);

        const userThemeSub = StorageService.userTheme.subscribe(value => setUserTheme(value));

        return () => {
            userThemeSub.unsubscribe();
        };
    }, []);

    const autoTheme = isDarkTheme ? 'dark' : 'light';
    const themeType = userTheme === 'auto' ? autoTheme : userTheme;

    const theme = React.useMemo(() => {
        const object = GetTheme({ theme: themeType });

        return createMuiTheme(object);
    }, [themeType]);

    return <>
        <Head>
            <link rel='apple-touch-icon' sizes='180x180' href={`/favicons/${themeType}/apple-touch-icon.png`} />
            <link rel='icon' type='image/png' sizes='32x32' href={`/favicons/${themeType}/favicon-32x32.png`} />
            <link rel='icon' type='image/png' sizes='16x16' href={`/favicons/${themeType}/favicon-16x16.png`} />
            <link rel='manifest' href={`/favicons/${themeType}/site.webmanifest`} />
            <link rel='mask-icon' href={`/favicons/${themeType}/safari-pinned-tab.svg`} color='#ab9363' />
            <meta name='msapplication-TileColor' content='#ab9363' />
            <meta name='theme-color' content='#ab9363' />
        </Head>

        <ThemeProvider theme={theme}>
            <Middleware>
                <NextNprogress
                    color={theme.palette.secondary.main}
                    startPosition={0.04}
                    stopDelayMs={50}
                    height={2}
                    options={{
                        showSpinner: false,
                    }}
                />

                <App>
                    <Component {...pageProps} />
                </App>
            </Middleware>
        </ThemeProvider>
    </>;
}
