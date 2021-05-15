import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import { CircularProgress } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        fontWeight: 600,
        lineHeight: 1.75,
        borderRadius: 24,
        letterSpacing: '0.06em',
        fontSize: 13,
        textTransform: 'none',
        alignSelf: 'center',
    },
    sizeLarge: {
        minWidth: 153,
        padding: '9px 24px',
    },
    sizeSmall: {
        padding: '4px 12px',
    },
    contained: {
        color: '#fff',
    },
}), { name: 'BlogButton' });

export default function BlogButton(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { children, loading, disabled, ...other } = props;

    return (
        <Button
            variant='contained'
            color='primary'
            size='medium'
            classes={classes}
            disabled={disabled || loading}
            {...other}
        >
            {children} {loading && <CircularProgress style={{ marginLeft: 12, color: theme.palette.text.disabled }} size={20} />}
        </Button>
    );
}

