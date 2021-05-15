import React from 'react';
import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'QoolpageLink' });

export default function QoolpageLink(props) {
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

