import React from 'react';
import { DialogActions, makeStyles } from '@material-ui/core';

import { rgbToRGBA } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '16px 8px',
        justifyContent: 'center',
        background: rgbToRGBA(theme.palette.text.primary, 2),
    },
}), { name: 'BlogDialogActions' });

export default function BlogDialogActions(props) {
    const classes = useStyles();

    return (
        <DialogActions
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

