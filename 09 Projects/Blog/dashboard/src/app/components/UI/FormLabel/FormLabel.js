import React from 'react';
import { FormLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 14,
        margin: '12px 0 7px',
        textTransform: 'capitalize',
        color: theme.palette.text.primary,
        fontWeight: props => props.fontWeight || 600,
    },
}), { name: 'BlogFormLabel' });

export default function BlogFormLabel(props) {
    const classes = useStyles(props);

    return (
        <FormLabel
            classes={{
                root: classes.root,
            }}
            component='h6'
            {...props}
        />
    );
}

