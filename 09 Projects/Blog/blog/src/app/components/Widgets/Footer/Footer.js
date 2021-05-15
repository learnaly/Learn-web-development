import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import { Typography } from '../../';
import { rgbToRGBA } from '../../../utils';

const useStyles = makeStyles(theme => ({
    '@keyframes spin': {
        to: { transform: 'rotateY(720deg)' },
    },
    root: {
        zIndex: '700 !important',
        width: '100%',
        flex: '0 0 auto',
        backgroundColor: theme.palette.background.primary,
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: theme.breakpoints.values.lg2,
        margin: '0 auto',
        padding: '44px 40px',
        transformStyle: 'preserve-3d',

        [`@media only screen and (min-width: ${theme.breakpoints.values.lg}px)`]: {
            padding: '54px 40px',
        },
    },
    logo: {
        height: 23,
        width: 'auto',
        fill: theme.palette.text.primary,
        marginBottom: 19,
        animation: '$spin 1.21s ease infinite',
        backfaceVisibility: 'visible',
    },
    copyright: {
        fontSize: 12,
        color: rgbToRGBA(theme.palette.text.primary, 50),
        fontWeight: 400,
    },
}), { name: 'Footer' });

export default function Footer(props) {
    const classes = useStyles(props);

    return (
        <footer
            className={clsx(classes.root)}
        >
            <div className={classes.wrapper}>
                <Typography
                    variant='h6'
                    className={classes.copyright}
                >
                    © 2020 Qoolpage
                </Typography>
            </div>
        </footer>
    );
}
