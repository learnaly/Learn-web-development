import React from 'react';
import { DialogContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 54,

        '@media only screen and (min-width: 720px)': {
            paddingTop: 74,
        },
    },
    main: {
        width: '100%',
        maxWidth: theme.breakpoints.values.md,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'left',
    },
}), { name: 'BlogDialogContent' });

export default function BlogDialogContent(props) {
    const classes = useStyles();

    const { children, ...other } = props;

    return (
        <DialogContent
            classes={{
                root: classes.root,
            }}
            {...other}
        >
            <main className={classes.main}>
                {children}
            </main>
        </DialogContent>
    );
}

