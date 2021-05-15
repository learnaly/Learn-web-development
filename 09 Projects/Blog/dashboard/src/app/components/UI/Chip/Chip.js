import React from 'react';
import { Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: props => props.variant !== 'outlined' ?
        ({
            color: '#fff',
        }) :
        ({

        }),
}), { name: 'BlogChip' });

export default function BlogChip(props) {
    const classes = useStyles(props);

    return (
        <Chip
            classes={{
                root: classes.root,
            }}
            {...props}
        />
    );
}

