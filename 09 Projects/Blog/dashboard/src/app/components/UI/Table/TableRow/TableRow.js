import React from 'react';
import { TableRow, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogTableRow' });

export default function BlogTableRow(props) {
    const classes = useStyles();

    return (
        <TableRow
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

