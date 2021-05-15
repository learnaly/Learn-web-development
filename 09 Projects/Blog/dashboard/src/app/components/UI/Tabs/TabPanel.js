import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '34px 8px',
        width: '100%',
    },
}), { name: 'BlogTabPanel' });

export default function BlogTabPanel(props) {
    const classes = useStyles();
    const { className, children, value, index, noHide, ...other } = props;

    return <>
        {(!noHide && value === index) && (
            <div
                {...other}
                className={clsx(classes.root, className)}
            >
                {children}
            </div>
        )}

        {noHide && (
            <div
                {...other}
                className={clsx(classes.root, className)}
            >
                {children}
            </div>
        )}
    </>;
}
