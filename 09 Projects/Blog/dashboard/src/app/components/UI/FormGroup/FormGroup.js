import React from 'react';
import { FormGroup, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { Typography } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    formGroup: {
        width: '100%',
        display: 'grid',
        gridGap: 16,
        gridTemplateColumns: 'repeat(auto-fit, minmax(1fr))',

        '@media only screen and (min-width: 720px)': {
            gridTemplateColumns: props => (props.row && !props.widthAuto) ? 'repeat(auto-fit, minmax(100px, 1fr))' : 'initial',
        },
    },
    error: {
        fontSize: '14px !important',
        fontWeight: '600 !important',
        marginTop: '40px !important',
        color: theme.palette.error.light,
    },
}), { name: 'BlogFormGroup' });

export default function BlogFormGroup(props) {
    const classes = useStyles(props);

    const { widthAuto, error, noErrorText, className, ...other } = props;

    return (
        <div className={classes.root}>
            <FormGroup
                classes={{
                    root: classes.formGroup,
                }}
                className={clsx(className)}
                {...other}
            />

            {error && !noErrorText && (
                <Typography
                    error={true}
                    className={classes.error}
                >
                    {error}
                </Typography>
            )}
        </div>
    );
}

