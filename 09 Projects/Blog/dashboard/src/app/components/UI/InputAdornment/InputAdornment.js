import React from 'react';
import { InputAdornment, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogInputAdornment' });

export default function BlogInputAdornment(props) {
    const classes = useStyles();

    return (
        <InputAdornment
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

