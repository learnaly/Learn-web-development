import React from 'react';
import { Table, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogTable' });

export default function BlogTable(props) {
    const classes = useStyles();

    return (
        <Table
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

