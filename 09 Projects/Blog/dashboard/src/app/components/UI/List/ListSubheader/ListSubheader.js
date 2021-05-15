import React from 'react';
import { ListSubheader, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
}), { name: 'BlogListSubheader' });

export default function BlogListSubheader(props) {
    const classes = useStyles();

    return (
        <ListSubheader
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

