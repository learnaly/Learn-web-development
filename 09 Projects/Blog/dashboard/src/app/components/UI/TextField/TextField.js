import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: '0.91rem',
        margin: 0,
    },
    formHelperTextRoot: {
        marginTop: 11,
    },
}), { name: 'BlogTextField' });

export default function BlogTextField(props) {
    const classes = useStyles();

    return (
        <TextField
            variant='outlined'
            color='primary'
            margin='normal'
            classes={{
                root: classes.root,
            }}
            {...props}
            FormHelperTextProps={{
                classes: {
                    root: classes.formHelperTextRoot,
                },
            }}
        />
    );
}

