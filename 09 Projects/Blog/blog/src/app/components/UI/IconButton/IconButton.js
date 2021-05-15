import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    colorInherit: {
        color: '#fff',
    },
}), { name: 'BlogIconButton' });

export default function BlogIconButton(props) {
    const classes = useStyles();

    return (
        <IconButton
            color='primary'
            classes={{
                root: classes.root,
                colorInherit: classes.colorInherit,
            }}
            {...props}
        />
    );
}

