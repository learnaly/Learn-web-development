import React from 'react';
import { Select, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { FormControl, InputLabel, FormHelperText } from '../../';
import { normalize } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        margin: 0,
    },
    formControl: {
        margin: `${theme.spacing(1)}px 0`,
        minWidth: 120,
    },
}), { name: 'BlogSelect' });

export default function BlogSelect(props) {
    const classes = useStyles();

    const { className, label, key, style, error, size, ...other } = props;

    return <>
        {(label || error) && (
            <FormControl
                variant='outlined'
                className={clsx(classes.formControl, className)}
                size={size}
                style={style}
                key={key}
            >
                {label && <InputLabel>{label}</InputLabel>}

                <Select
                    label={label}
                    classes={{
                        root: classes.root,
                    }}
                    {...other}
                />

                {error && <FormHelperText>{normalize(error)}</FormHelperText>}
            </FormControl>
        )}

        {!(label || error) && (
            <Select
                className={clsx(className)}
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

