import React from 'react';
import { FormControlLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        userSelect: 'none',
    },
}), { name: 'BlogFormControlLabel' });

export default function BlogFormControlLabel(props) {
    const classes = useStyles();

    return (
        <FormControlLabel
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

