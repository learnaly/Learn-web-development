import React from 'react';
import { TableHead, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogTableHead' });

export default function BlogTableHead(props) {
    const classes = useStyles();

    return (
        <TableHead
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

