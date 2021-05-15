import React from 'react';
import { Tabs, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {

    },
    indicator: {
        display: 'none',
    },
}), { name: 'BlogTabs' });

export default function BlogTabs(props) {
    const classes = useStyles();

    return (
        <Tabs
            {...props}
            variant={props.variant || 'scrollable'}
            indicatorColor='primary'
            scrollButtons='auto'
            classes={{
                root: classes.root,
                indicator: classes.indicator,
            }}
        />
    );
}

