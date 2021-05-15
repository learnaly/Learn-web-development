import React from 'react';
import { TableCell, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        borderColor: theme.palette.divider,
    },
}), { name: 'BlogTableCell' });

export default function BlogTableCell(props) {
    const classes = useStyles();

    return (
        <TableCell
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

