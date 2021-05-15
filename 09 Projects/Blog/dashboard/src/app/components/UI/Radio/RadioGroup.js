import React from 'react';
import { RadioGroup, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
}), { name: 'BlogRadioGroup' });

export default function BlogRadioGroup(props) {
    const classes = useStyles();

    return (
        <RadioGroup
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

