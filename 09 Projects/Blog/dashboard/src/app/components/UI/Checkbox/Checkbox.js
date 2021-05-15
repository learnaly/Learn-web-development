import React from 'react';
import clsx from 'clsx';
import { Checkbox, makeStyles } from '@material-ui/core';

import { FormControlLabel } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogCheckbox' });

export default function BlogCheckbox(props) {
    const classes = useStyles();

    const { className, label, key, style, ...other } = props;

    return <>
        {label && (
            <FormControlLabel
                className={clsx(classes.root, className)}
                label={label}
                control={
                    <Checkbox
                        color='primary'
                        classes={{
                            root: classes.root,
                        }}
                        {...other}
                    />
                }
                style={style}
                key={key}
            />
        )}

        {!label && (
            <Checkbox
                className={clsx(classes.root, className)}
                color='primary'
                classes={{
                    root: classes.root,
                }}
                style={style}
                key={key}
                {...other}
            />
        )}
    </>;
}

