import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import { CircularProgress } from '../../';
import { FONT_FAMILY } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        fontWeight: 400,
        lineHeight: 1.75,
        borderRadius: 24,
        letterSpacing: 0.3,
        fontSize: 13,
        textTransform: 'none',
        alignSelf: 'center',
        'border-width': 2,
        'font-family': FONT_FAMILY.tertiary,
        'font-weight': 'bold',
        'font-size': 11,
        'line-height': 1,
        'padding': '11px 17px',
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
}), { name: 'QoolpageButton' });

export default function QoolpageButton(props) {
    const classes = useStyles();
    const theme = useTheme();
    const { children, loading, disabled, ...other } = props;

    const c = {};
    Object.keys(classes).forEach(key => c[key] = classes[key]);

    return (
        <Button
            variant='contained'
            color='primary'
            size='medium'
            classes={c}
            disabled={disabled || loading}
            {...other}
        >
            {children} {loading && <CircularProgress style={{ marginLeft: 12, color: theme.palette.text.disabled }} size={20} />}
        </Button>
    );
}

