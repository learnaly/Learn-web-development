import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        padding: `24px 14px`,
        width: '100%',
    },
}), { name: 'QoolpageTabPanel' });

export default function QoolpageTabPanel(props) {
    const classes = useStyles();

    const { children, value, index, className, hide, ...other } = props;

    return <>
        {(hide && value === index) && (
            <div
                {...other}
                className={clsx(classes.root, className)}
            >
                {children}
            </div>
        )}

        {!hide && (
            <div
                {...other}
                className={clsx(classes.root, className)}
            >
                {children}
            </div>
        )}
    </>;
}

