import React, { useEffect, useState } from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createMuiTheme, useMediaQuery } from '@material-ui/core';
import { Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Helmet } from 'react-helmet';

import Routes from './Routes';
import { GetTheme, history, DEFAULT_THEME } from './utils';
import { Middleware } from './components';
import { StorageService } from './services';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',

        '& > *': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
        },
    },
}), { name: 'App' });

function App() {
    const classes = useStyles();
    const isDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');
    const [userTheme, setUserTheme] = useState(DEFAULT_THEME);

    useEffect(() => {
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
        <Helmet>
            <link rel='apple-touch-icon' sizes='180x180' href={`/favicons/${themeType}/apple-touch-icon.png`} />
            <link rel='icon' type='image/png' sizes='32x32' href={`/favicons/${themeType}/favicon-32x32.png`} />
            <link rel='icon' type='image/png' sizes='16x16' href={`/favicons/${themeType}/favicon-16x16.png`} />
            <link rel='manifest' href={`/favicons/${themeType}/site.webmanifest`} />
            <link rel='mask-icon' href={`/favicons/${themeType}/safari-pinned-tab.svg`} color='#ab9363' />
            <meta name='msapplication-TileColor' content='#ab9363' />
            <meta name='theme-color' content='#ab9363' />
        </Helmet>

        <ThemeProvider theme={theme}>
            <Middleware>
                <SnackbarProvider
                    maxSnack={4}
                    preventDuplicate={false}
                >
                    <div className={classes.root}>
                        <Router history={history}>
                            <Routes />
                        </Router>
                    </div>
                </SnackbarProvider>
            </Middleware>
        </ThemeProvider>
    </>;
}

export default App;
