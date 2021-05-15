import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogTypography' });

export default function BlogTypography(props) {
    const classes = useStyles();

    return (
        <Typography
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

