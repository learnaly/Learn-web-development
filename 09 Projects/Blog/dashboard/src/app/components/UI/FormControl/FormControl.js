import React from 'react';
import { FormControl, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 !important',
    },
}), { name: 'BlogFormControl' });

export default function BlogFormControl(props) {
    const classes = useStyles();

    return (
        <FormControl
            {...props}
            classes={{
                root: classes.root,
                marginNormal: classes.marginNormal,
            }}
        />
    );
}

