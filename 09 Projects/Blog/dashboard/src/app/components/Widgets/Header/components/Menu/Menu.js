import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link as RLink } from 'react-router-dom';
import clsx from 'clsx';

import SignOutIcon from '@material-ui/icons/ExitToApp';

import { Menu, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, ListItemIcon } from '../../../../';
import { AuthService, AccountService, StorageService } from '../../../../../services';

import { rgbToRGBA } from '../../../../../utils';

const useStyles = makeStyles(theme => ({
    avatar: {
        cursor: 'pointer',
        width: 35,
        height: 35,
        fontSize: 17,
        marginLeft: 12,
        backgroundColor: theme.palette.primary[theme.palette.type !== 'light' ? 'main' : 'light'],
        transition: 'backgroundColor .2s, transform .2s',
        color: '#fff',

        '&:active': {
            transform: 'scale(0.94)',
        },

        '&.notTop': {
            backgroundColor: rgbToRGBA(theme.palette.primary[theme.palette.type !== 'light' ? 'main' : 'light'], 98),
        },
    },
}), { name: 'UserMenu' });

export default function UserMenu(props) {
    const classes = useStyles(props);
    const [anchorEl, setAnchorEl] = useState(null);
    const [account, setAccount] = useState();

    useEffect(() => {
        const accountSub = AccountService.accountSub.subscribe(value => value && setAccount(value));

        setAccount(StorageService.get('account'));

        return () => {
            accountSub.unsubscribe();
        };
        // eslint-disable-next-line
    }, []);

    const onMenuClose = () => {
        setAnchorEl(null);
    };

    const dropdownItems = [];

    const accountData = account && account.data;

    const menuItemProps = { variant: 'body1' };

    return (
        <div>
            <Avatar
                className={clsx(props.className, classes.avatar)}
                onClick={event => setAnchorEl(event.currentTarget)}
            >
                {(accountData && accountData.full_name && accountData.full_name.charAt(0)) || 'A'}
            </Avatar>

            <Menu
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={onMenuClose}
                component='nav'
                keepMounted
            >
                <div>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar
                                    className={classes.avatar}
                                    style={{ border: 'none' }}
                                >
                                    {(accountData && accountData.full_name && accountData.full_name.charAt(0)) || 'A'}
                                </Avatar>
                            </ListItemAvatar>

                            <ListItemText
                                primary={accountData && (accountData.full_name)}
                                secondary={accountData && (accountData.email || 'No email')}
                                primaryTypographyProps={{ variant: 'subtitle2' }}
                                secondaryTypographyProps={{ variant: 'body2' }}
                            />
                        </ListItem>
                    </List>

                    {!!dropdownItems.length && <>
                        <Divider />

                        <List>
                            {dropdownItems.map((item, index) => (
                                <ListItem
                                    key={index}
                                    component={RLink}
                                    to={item.to}
                                    onClick={onMenuClose}
                                    button
                                >
                                    {item.icon && (
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                    )}
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={menuItemProps}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </>}

                    <Divider />

                    <List>
                        <ListItem
                            onClick={() => {
                                AuthService.logout();
                                onMenuClose();
                            }}
                            button
                        >
                            <ListItemIcon>
                                <SignOutIcon />
                            </ListItemIcon>

                            <ListItemText
                                primary='Sign out'
                                primaryTypographyProps={menuItemProps}
                            />
                        </ListItem>
                    </List>
                </div>
            </Menu>
        </div>
    );
}
