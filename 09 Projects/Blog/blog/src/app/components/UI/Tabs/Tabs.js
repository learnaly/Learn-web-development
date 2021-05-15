import React from 'react';
import { Tabs, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    indicator: {
        height: 3,
        bottom: 5,
    },
    scrollable: {
        paddingTop: 10,
    },
    scrollButtons: {
        borderRadius: '50%',
        width: 40,
        height: 40,
    },
}), { name: 'QoolpageTabs' });

export default function QoolpageTabs(props) {
    const classes = useStyles();

    return (
        <Tabs
            {...props}
            variant={props.variant || 'scrollable'}
            indicatorColor='secondary'
            scrollButtons='auto'
            classes={{
                root: classes.root,
                indicator: classes.indicator,
                scrollable: classes.scrollable,
                scrollButtons: classes.scrollButtons,
            }}
        />
    );
}

