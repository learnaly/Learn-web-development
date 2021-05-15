import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    paper: {
        background: theme.palette.background.secondary,
    },
}), { name: 'BlogDrawer' });

export default function BlogDrawer(props) {
    const classes = useStyles();

    return (
        <Drawer
            classes={{
                root: classes.root,
                paper: classes.paper,
            }}
            ModalProps={{
                keepMounted: true,
            }}
            {...props}
        />
    );
}

