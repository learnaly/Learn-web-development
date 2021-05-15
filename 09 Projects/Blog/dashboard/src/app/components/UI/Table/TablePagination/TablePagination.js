import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import IconNavigateBefore from '@material-ui/icons/NavigateBefore';
import IconNavigateNext from '@material-ui/icons/NavigateNext';

import { Typography, IconButton } from '../../../';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        'align-items': 'center',
        'justify-content': 'flex-start',
        padding: '13px 15px',
        overflowX: 'auto',

        '@media only screen and (min-width: 720px)': {
            flexDirection: 'column',
            'justify-content': 'center',
        },
    },
    ul: {
        flexWrap: 'nowrap',

        '@media only screen and (min-width: 720px)': {
            flexWrap: 'wrap',
        },
    },
    total: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: 5,
    },
}), { name: 'QPTablePagination' });

export default function QPTablePagination(props) {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [lastNavigation, setLastNavigation] = useState();

    const { loading, pagination = {}, limit: _limit, onPaginationChange, type, showTotal, total: _total, objects = {}, firstPage } = props;

    const total = _total || 0;
    const checkPage = props.page !== page;

    const has_more = objects && objects.has_more;

    const hub = pagination && pagination.hasOwnProperty('hasNext');
    const stripe = objects && objects.hasOwnProperty('has_more');

    let _objects = { first: {}, last: {} };

    if (stripe && objects.data) {
        _objects.first = objects.data[0];
        _objects.last = objects.data[objects.data.length - 1];
    }

    useEffect(() => {
        if (hub) {
            if (!loading) {
                const limit = _limit || 10;
                let c = total > limit ? Math.ceil(total / limit) : 1;
                if (props.page < c && c > 10) c = 10;
                if (props.page >= c && pagination.hasNext) c = props.page + 1;

                setCount(c);
                setPage(props.page);
            }
        }

        // eslint-disable-next-line
    }, [pagination.total, pagination.hasNext, _limit, checkPage, loading]);

    const onChange = (event, page) => {
        if (onPaginationChange) onPaginationChange(page);
    };

    const onChangeStripe = (action = 'next') => {
        const query = {};

        if (action === 'previous') query['ending_before'] = _objects.first.id;
        if (action === 'next') query['starting_after'] = _objects.last.id;

        if (onPaginationChange) onPaginationChange(query);

        setLastNavigation(action);
    };

    return (
        <div className={classes.root}>
            {!!hub && <>
                <Pagination
                    classes={{
                        root: classes.root,
                        ul: classes.ul,
                    }}
                    count={count}
                    onChange={onChange}
                    showFirstButton
                    showLastButton
                    disabled={loading}
                    page={page}
                />

                {showTotal && (
                    <Typography
                        className={classes.total}
                        variant='body2'
                    >
                        {total >= 1e3 ? 'More than ' : ''}{total} {type || ''} found
                    </Typography>
                )}
            </>}
            {!!stripe && <>
                <div>
                    <IconButton
                        onClick={() => onChangeStripe('previous')}
                        disabled={firstPage || (lastNavigation === 'previous' && !has_more)}
                    >
                        <IconNavigateBefore />
                    </IconButton>

                    <IconButton
                        onClick={() => onChangeStripe('next')}
                        disabled={(lastNavigation === 'next' && !has_more) || (firstPage && !has_more)}
                    >
                        <IconNavigateNext />
                    </IconButton>
                </div>
            </>}
        </div>
    );
}

