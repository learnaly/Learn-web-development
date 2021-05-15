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
        marginRight: 30,
        padding: 0,
        overflow: 'visible',
        fontSize: 17,

        '& > span': {
            zIndex: 1,
        },
    },
}), { name: 'QoolpageTab' });

export default function QoolpageTab(props) {
    const classes = useStyles();

    return (
        <Tab
            {...props}
            disableRipple={props.hasOwnProperty('disableRipple') ? props.disableRipple : true}
            classes={{
                root: classes.root,
                selected: classes.selected,
            }}
        />
    );
}

