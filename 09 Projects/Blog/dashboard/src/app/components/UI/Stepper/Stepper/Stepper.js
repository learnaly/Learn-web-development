import React from 'react';
import { Stepper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.primary,
    },
}), { name: 'BlogStepper' });

export default function BlogStepper(props) {
    const classes = useStyles();

    return (
        <Stepper
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

