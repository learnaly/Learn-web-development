import React from 'react';
import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogLink' });

export default function BlogLink(props) {
    const classes = useStyles();

    return (
        <Link
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

