import React from 'react';
import { StepLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& text': {
            fill: '#fff',
        },
    },
    label: {
        fontSize: 13,
    },
    iconContainer: {
        '& > svg': {
            fontSize: 24,
            fontWeight: 600,
        },
    },
    active: {
        fontWeight: '600 !important',
    },
    completed: {
        fontWeight: '600 !important',
    },
}), { name: 'BlogStepLabel' });

export default function BlogStepLabel(props) {
    const classes = useStyles();

    return (
        <StepLabel
            classes={{
                root: classes.root,
                label: classes.label,
                iconContainer: classes.iconContainer,
                active: classes.active,
                completed: classes.completed,
            }}
            {...props}
        />
    );
}

