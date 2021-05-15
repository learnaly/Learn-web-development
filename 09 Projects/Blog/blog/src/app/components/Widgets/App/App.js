import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Header, Footer } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.primary,
        position: 'relative',
    },
    main: {
        flex: '1 1 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
}), { name: 'App' });

export default function App(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <main className={classes.main}>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}
