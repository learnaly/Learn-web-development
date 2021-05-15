import React from 'react';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

import { Button, Dialog } from '../..';

const ConfirmDialog = props => {
    const { open, onCancel, onConfirm, onClose, options = {} } = props;

    const { title, description, text = {}, } = options;
    const { ok, cancel } = text;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth='xs'
            fullWidth
        >
            {title && <DialogTitle>{title}</DialogTitle>}

            {description && (
                <DialogContent>
                    <DialogContentText>{description}</DialogContentText>
                </DialogContent>
            )}

            <DialogActions>
                <Button
                    variant='text'
                    onClick={onCancel}
                >
                    {cancel}
                </Button>
                <Button
                    variant='text'
                    color='primary'
                    onClick={onConfirm}
                >
                    {ok}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
