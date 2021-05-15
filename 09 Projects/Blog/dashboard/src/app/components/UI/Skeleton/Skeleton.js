import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogSkeleton' });

export default function BlogSkeleton(props) {
    const classes = useStyles();

    return (
        <Skeleton
            classes={{
                root: classes.root,
            }}
            variant='rect'
            {...props}
        />
    );
}

