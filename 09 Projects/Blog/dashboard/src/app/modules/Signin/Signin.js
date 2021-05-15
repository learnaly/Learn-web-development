import React, { useState, useEffect } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { ReactComponent as Logo } from '../../../assets/svg/logo.svg';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import { AuthService } from '../../services';
import { Button, useForm, TextField, FormGroup, IconButton, InputAdornment, Link as MLink, Title } from '../../components';
import { parseError, GetTheme } from '../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '25px 40px',
        color: '#fff',
        background: theme.palette.primary.main,
        flex: '1 1 auto',

        '& .Mui-focused': {
            color: '#fff',
        },
    },
    main: {
        width: '100%',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 450,
        margin: '0 auto',
    },
    form: {
        width: '100%',
        textAlign: 'center',
    },
    button: {
        ...theme.mixins.button.submit,
    },
    link: {
        marginRight: 12,
        color: '#fff',

        '&:last-child': {
            marginRight: 0,
        },
    },
    links: {
        margin: '14px 0',
        marginTop: 45,
    },
    logo: {
        marginBottom: 54,

        '& svg': {
            width: 'auto',
            height: 54,
            fill: '#fff',
        },

        '& img': {
            width: 'auto',
            height: 54,
        },
    },
}), { name: 'Signin' });

function validateEmailForm(values) {
    const errors = {};

    if (!values.email) errors.email = 'Email is required';
    if (!values.password) errors.password = 'Password is required';

    return errors;
}

const links = [
    { label: `You don't have an account? Sign up`, to: '/signup' },
];

export default function Signin() {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm(validateEmailForm);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: 'error' });
            setError('');
        }
        // eslint-disable-next-line
    }, [error]);

    const onSignin = async event => {
        event.preventDefault();
        setError('');

        if (form.valid) {
            setLoading(true);

            try {
                const _values = { ...form.values };

                await AuthService.login(_values);
            } catch (error) {
                setLoading(false);
                setError(parseError(error));
            }
        }
    };

    const theme = React.useMemo(() => {
        const options = { theme: 'dark' };

        const object = GetTheme(options);

        return createMuiTheme(object);
    }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <Link className={classes.logo} to='/'>
                    <Logo />
                </Link>

                <div className={classes.main}>
                    <Title
                        title='Sign in'
                    />

                    <form
                        onSubmit={onSignin}
                        className={classes.form}
                    >
                        <FormGroup>
                            <TextField
                                label='Email'
                                onChange={form.onChange}
                                type='email'
                                name='email'
                                variant='filled'
                            />

                            <TextField
                                label='Password'
                                onChange={form.onChange}
                                value={form.values.password || ''}
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                variant='filled'
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment
                                            position='end'>
                                            <IconButton
                                                onClick={event => setShowPassword(!showPassword)}
                                                style={{ color: '#fff' }}
                                            >
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Button
                                disabled={!form.valid}
                                loading={loading}
                                type='submit'
                                color='default'
                                size='large'
                                className={classes.button}
                            >
                                Sign in
                            </Button>

                        </FormGroup>
                    </form>

                    <div className={classes.links}>
                        {links.map((link, index) => (
                            <MLink
                                component={Link}
                                to={link.to}
                                key={index}
                                className={classes.link}
                            >
                                {link.label}
                            </MLink>
                        ))}
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
    );
}
