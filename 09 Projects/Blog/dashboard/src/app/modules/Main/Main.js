import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Header, Footer } from '../../components';

import Routes from './Routes';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.primary,
        position: 'relative',
        flex: '1 1 auto',
        paddingTop: 96,

        '@media only screen and (min-width: 600px)': {
            paddingTop: 104,
        },
    },
    main: {
        flex: '1 1 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: 24,
    },
}), { name: 'Main' });

export default function Main() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <main
                className={classes.main}
            >
                <Routes />
            </main>
            <Footer />
        </div>
    );
}
