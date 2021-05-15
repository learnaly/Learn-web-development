import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Collapse } from '@material-ui/core';

import { Typography } from '../../';
import { useInterval } from '../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    main: {
        width: '100%',
        textAlign: 'center',
        padding: '0 15px',
        textTransform: 'uppercase',
        fontSize: 9,
        color: '#fff',
        background: '#777',
        lineHeight: 1,
        height: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: 0.4,
    },
}), { name: 'CheckOnline' });

export default function CheckOnline(props) {
    const classes = useStyles(props);
    const [showSign, setShowSign] = useState(false);
    const [online, setOnline] = useState(true);

    const checkOnline = () => {
        if (window.navigator.onLine) {
            if (!online) {
                if (!showSign) setShowSign(true);

                setOnline(true);

                setTimeout(() => {
                    setShowSign(false);
                }, 3000);
            }
        } else {
            if (!showSign) setShowSign(true);
            if (online) setOnline(false);
        }
    };

    useInterval(checkOnline, 1500);

    return (
        <div
            className={classes.root}
        >
            <Collapse
                in={showSign}
            >
                <Typography
                    className={classes.main}
                    style={{ backgroundColor: online ? '#00c853' : '#444444' }}
                >
                    {online ? 'You are back online' : 'You are offline'}
                </Typography>
            </Collapse>
        </div>
    );
}
