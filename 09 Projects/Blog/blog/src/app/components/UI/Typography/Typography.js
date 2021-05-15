import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'QoolpageTypography' });

export default function QoolpageTypography(props) {
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

