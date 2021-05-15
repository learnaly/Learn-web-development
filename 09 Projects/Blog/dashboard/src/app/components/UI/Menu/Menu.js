import React from 'react';
import { Menu, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.074)',
        minWidth: props => props.minWidth || 254,
        borderRadius: 8,
    },
}), { name: 'BlogMenu' });

export default function BlogMenu(props) {
    const classes = useStyles(props);
    const { minWidth, ...other } = props;

    return (
        <Menu
            classes={{
                paper: classes.paper,
            }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            getContentAnchorEl={null}
            {...other}
        />
    );
}

