import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useScrollTrigger } from '@material-ui/core';
import clsx from 'clsx';
import { Link as RLink } from 'react-router-dom';

import IconThemeAuto from '@material-ui/icons/Brightness6Outlined';
import IconThemeLight from '@material-ui/icons/Brightness5Outlined';
import IconThemeDark from '@material-ui/icons/Brightness4Outlined';

import { ReactComponent as LogoIcon } from '../../../../assets/svg/logo.svg';

import { CheckOnline, AppBar, Toolbar, IconButton, Tooltip } from '../../';
import { StorageService } from '../../../services';
import { rgbToRGBA, capitalize, DEFAULT_THEME } from '../../../utils';
import { Menu } from './components';

const useStyles = makeStyles(theme => ({
    root: {
        zIndex: '1000 !important',
        width: '100%',
        top: 0,
        left: 0,
        position: 'fixed',
    },
    appBar: {
        color: '#fff',
        boxShadow: 'none',
        padding: '14px 0',
        transition: 'background-color .2s, box-shadow .2s',
        backgroundColor: theme.palette.primary[theme.palette.type === 'dark' ? 'dark' : 'main'],

        '&.notTop': {
            backgroundColor: rgbToRGBA(theme.palette.primary[theme.palette.type === 'dark' ? 'dark' : 'main'], 98),
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    toolbar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 'initial',
    },
    logo: {
        display: 'inline-flex',
        alignItems: 'center',

        '& > svg': {
            width: 'auto',
            height: 44,
            fill: '#fff',
        },

        '& > img': {
            width: 'auto',
            height: 44,
        },
    },
    menu: {
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.primary.main,
        whiteSpace: 'nowrap',
    },
    linkText: {
        color: theme.palette.text.primary,
    },
    icon: {
        marginRight: theme.spacing(1),
        width: 20,
        height: 20,
    },
    iconTheme: {
        fontSize: '1.5rem',

        [`@media only screen and (min-width: ${theme.breakpoints.values.lg}px)`]: {
            fontSize: '1.6rem',
        },
    },
}), { name: 'Header' });

export default function Header(props) {
    const classes = useStyles(props);
    const [userTheme, setUserTheme] = useState(DEFAULT_THEME);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 300,
    });

    useEffect(() => {
        const userThemeSub = StorageService.userTheme.subscribe(value => setUserTheme(value));

        return () => {
            userThemeSub.unsubscribe();
        };
    }, []);

    const onThemeChange = () => {
        let value = 'auto';
        if (userTheme === 'auto') value = 'light';
        if (userTheme === 'light') value = 'dark';

        setUserTheme(value);
        StorageService.setUserTheme(value);
    };

    let Icon = IconThemeAuto;

    if (userTheme === 'light') Icon = IconThemeLight;
    if (userTheme === 'dark') Icon = IconThemeDark;

    return (
        <div className={classes.root}>
            <AppBar
                className={clsx(classes.appBar, { notTop: !!trigger })}
                position='relative'
            >
                <Toolbar className={classes.toolbar}>
                    <Tooltip
                        title={`${capitalize(userTheme)} theme`}
                    >
                        <IconButton
                            onClick={onThemeChange}
                            color='inherit'
                            size='small'
                            className={classes.buttonTheme}
                        >
                            <Icon
                                className={classes.iconTheme}
                            />
                        </IconButton>
                    </Tooltip>

                    <div className={classes.title}>
                        <RLink to='/' className={classes.logo}>
                            <LogoIcon />
                        </RLink>
                    </div>

                    <div className={classes.menu}>
                        <Menu
                            className={clsx({ notTop: !!trigger })}
                        />
                    </div>
                </Toolbar>
            </AppBar>

            <CheckOnline />
        </div>
    );
}
