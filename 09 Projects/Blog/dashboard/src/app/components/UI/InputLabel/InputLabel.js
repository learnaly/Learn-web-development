import React from 'react';
import { InputLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogInputLabel' });

export default function BlogInputLabel(props) {
    const classes = useStyles();

    return (
        <InputLabel
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

