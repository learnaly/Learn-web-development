import React from 'react';
import { Breadcrumbs, makeStyles } from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.secondary,
        width: '100%',
        borderBottom: '1px solid #eee',
    },
    ol: {
        padding: '7px 24px',
        flexWrap: 'nowrap',
        overflowY: 'auto',
    },
}), { name: 'BlogBreadcrumbs' });

export default function BlogBreadcrumbs(props) {
    const classes = useStyles();

    return (
        <Breadcrumbs
            separator={(
                <NavigateNextIcon
                    fontSize='small'
                    style={{
                        fontSize: 11,
                    }}
                />
            )}
            classes={{
                root: classes.root,
                ol: classes.ol,
            }}
            {...props}
        />
    );
}

