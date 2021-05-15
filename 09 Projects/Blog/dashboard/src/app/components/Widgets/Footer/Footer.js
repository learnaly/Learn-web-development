import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Typography } from '../../';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        flex: '0 0 auto',
        backgroundColor: theme.palette.background.primary,
        zIndex: '700 !important',
        marginTop: 24,
    },
    wrapper: {
        width: '100%',
        maxWidth: 1200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '34px 25px',
        margin: '0 auto',
    },
    copyright: {
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.03em',
        color: theme.palette.text.secondary,
        userSelect: 'none',
        textAlign: 'center',
    },
}), { name: 'Footer' });

export default function Footer(props) {
    const classes = useStyles(props);

    return (
        <footer
            className={classes.root}
        >
            <div className={classes.wrapper}>
                <Typography
                    variant='caption'
                    className={classes.copyright}
                >
                    Copyright © 2020

                    <span style={{ margin: '0 9px' }}>·</span>

                    Blog
                </Typography>
            </div>
        </footer>
    );
}
