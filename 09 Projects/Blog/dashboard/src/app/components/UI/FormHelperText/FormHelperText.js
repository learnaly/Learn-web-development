import React from 'react';
import { FormHelperText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 11,
    },
}), { name: 'BlogFormHelperText' });

export default function BlogFormHelperText(props) {
    const classes = useStyles();

    return (
        <FormHelperText
            {...props}
            classes={{
                root: classes.root,
            }}
        />
    );
}

