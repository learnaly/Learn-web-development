import React from 'react';
import { Step, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogStep' });

export default function BlogStep(props) {
    const classes = useStyles();

    return (
        <Step
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

