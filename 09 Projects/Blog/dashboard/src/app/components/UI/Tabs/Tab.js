import React from 'react';
import { Tab, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        ...theme.typography.h6,
        textTransform: 'none',
        transition: 'all .1s',
        minHeight: 'initial',
        minWidth: 'initial',
        position: 'relative',
        color: theme.palette.text.primary,
        fontWeight: 600,
        padding: '0 0 10px',
        marginRight: 30,

        '&:first-of-type': {
            marginLeft: props => props.noStartMargin ? 0 : 30,
        },

        '&:after': {
            content: "''",
            display: 'inline-block',
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 2,
            width: '100%',
            backgroundColor: theme.palette.text.primary,
            transition: 'transform .3s',
            transform: props => `scaleX(${props.noInitialMaginLine ? 0 : 0.2})`,
            transformOrigin: 'center',
        },
    },
    selected: {
        '&:after': {
            transform: 'scaleX(1) !important',
        },
    },
}), { name: 'BlogTab' });

export default function BlogTab(props) {
    const classes = useStyles(props);

    const { noInitialMaginLine, noStartMargin, ...other } = props;

    return (
        <Tab
            {...other}
            disableRipple={props.hasOwnProperty('disableRipple') ? props.disableRipple : true}
            classes={{
                root: classes.root,
                selected: classes.selected,
            }}
        />
    );
}

