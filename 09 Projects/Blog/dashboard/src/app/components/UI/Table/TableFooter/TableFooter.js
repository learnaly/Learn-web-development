import React from 'react';
import { TableFooter, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogTableFooter' });

export default function BlogTableFooter(props) {
    const classes = useStyles();

    return (
        <TableFooter
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

