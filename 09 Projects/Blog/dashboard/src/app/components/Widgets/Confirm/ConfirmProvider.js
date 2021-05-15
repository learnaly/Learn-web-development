import React, { useState, useCallback } from 'react';

import ConfirmContext from './ConfirmContext';
import ConfirmDialog from './ConfirmDialog';

const DEFAULT_OPTIONS = {
    title: 'Are you sure?',
    description: '',
    text: {
        ok: 'Ok',
        cancel: 'Cancel',
    },
};

const generateOptions = options => ({
    ...DEFAULT_OPTIONS,
    ...options,
});

const ConfirmProvider = props => {
    const [confirmOptions, setConfirmOptions] = useState(DEFAULT_OPTIONS);
    const [open, setOpen] = useState(false);
    const [resolveReject, setResolveReject] = useState([]);

    const [resolve, reject] = resolveReject;

    const confirm = useCallback((options = {}) => {
        return new Promise((resolve, reject) => {
            setOpen(true);
            setConfirmOptions(generateOptions(options));
            setResolveReject([resolve, reject]);
        });
    }, []);

    const onClose = useCallback(() => {
        setOpen(false);
        setResolveReject([]);
    }, []);

    const onCancel = useCallback(() => {
        if (reject) reject();
        onClose();
    }, [reject, onClose]);

    const handleConfirm = useCallback(() => {
        if (resolve) resolve();
        onClose();
    }, [resolve, onClose]);

    return (
        <>
            <ConfirmContext.Provider value={confirm}>
                {props.children}
            </ConfirmContext.Provider>

            <ConfirmDialog
                open={open}
                onClose={onClose}
                onCancel={onCancel}
                onConfirm={handleConfirm}
                options={confirmOptions}
            />
        </>
    );
};

export default ConfirmProvider;
