import React from 'react';
import { TableBody, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogTableBody' });

export default function BlogTableBody(props) {
    const classes = useStyles();

    return (
        <TableBody
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

