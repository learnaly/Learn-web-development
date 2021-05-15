import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

import ArrowBack from '@material-ui/icons/KeyboardBackspace';

import { Typography, IconButton, Tooltip } from '../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: 0,
        marginBottom: 45,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center',
        padding: '0 14px',

        '@media only screen and (min-width: 640px)': {
            marginTop: props => props.title === 'small' ? 0 : 24,
            marginBottom: props => props.title === 'small' ? 35 : 54,
        },
    },
    title: {
        color: theme.palette.text.primary,
        lineHeight: 1.35,
        marginBottom: 15,
        position: 'relative',
        width: '100%',
        maxWidth: 744,
        wordBreak: 'break-word',
        justifySelf: 'center',
        flex: '1 1 auto',
    },
    actions: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 34,
        width: '100%',
    },
    actionsLeft: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        justifySelf: 'flex-start',
        marginRight: 'auto',
        flex: '0 0 auto',
    },
    actionsRight: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        justifySelf: 'flex-end',
        marginLeft: 'auto',
        flex: '0 0 auto',
    },
    subtitle: {
        color: theme.palette.text.secondary,
        fontWeight: 500,
        marginTop: 7,
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    meta: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        ...theme.typography.subtitle2,
        margin: 0,
        fontWeight: 400,
        lineHeight: 1.55,
    },
    metaItem: {
        marginRight: 7,
        color: theme.palette.text.hint,

        '&:after': {
            content: "'·'",
            marginLeft: 7,
            fontSize: 12,
            color: theme.palette.text.disabled,
        },

        '&:last-child': {
            marginRight: 0,

            '&:after': {
                display: 'none',
            },
        },
    },
}), { name: 'Title' });

export default function Title(props) {
    const classes = useStyles(props);

    return (
        <div
            className={classes.root}
            style={props.style || {}}
        >
            <div className={classes.actions}>
                {(props.backTo && !props.noBackTo) && (
                    <div className={classes.actionsLeft}>
                        <Tooltip title='Back'>
                            <Link to={props.backTo}>
                                <IconButton
                                    color='default'
                                >
                                    <ArrowBack />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    </div>
                )}

                {(props.options && !props.noOptions) && (
                    <div className={classes.actionsRight}>
                        {props.options}
                    </div>
                )}
            </div>

            <Typography
                className={classes.title}
                variant={props.titleVariant || 'h3'}
                {...(props.titleProps || {})}
            >
                {props.title || `No title`}
            </Typography>

            {props.meta && (
                <div
                    className={classes.meta}
                >
                    {props.meta.map((item, index) => (
                        <Typography
                            className={classes.metaItem}
                            variant='body2'
                            key={index}
                        >
                            {item}
                        </Typography>
                    ))}
                </div>
            )}


            <Typography
                className={classes.subtitle}
                variant='body1'
            >
                {!props.noSubtitle && props.subtitle}
            </Typography>
        </div>
    );
}
