import React from 'react';
import { MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
    },
}), { name: 'BlogMenuItem' });

const BlogMenuItem = React.forwardRef((props, ref) => {
    const classes = useStyles();

    return (
        <MenuItem
            dense={true}
            classes={{
                root: classes.root,
            }}
            innerRef={ref}
            {...props}
        />
    );
});

export default BlogMenuItem;

