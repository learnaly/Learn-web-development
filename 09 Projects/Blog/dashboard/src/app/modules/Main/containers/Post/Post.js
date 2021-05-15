import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import { useForm, FormGroup, TextField, Button } from '../../../../components';
import { PostService } from '../../../../services';
import { history } from '../../../../utils';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: theme.breakpoints.values.form,
        margin: '0 auto',
    },
    form: {
        width: '100%',
    },
    button: {
        ...theme.mixins.button.submit,
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
    },
}), { name: 'Post' });

function validateForm(values) {
    const errors = {};

    if (!values.title) errors.title = 'Title is required';
    if (!values.body) errors.body = 'Body is required';

    return errors;
}

export default function Post() {
    const classes = useStyles();
    const [postId, setPostId] = useState();
    const [post, setPost] = useState();
    const [loading, setLoading] = useState();
    const form = useForm(validateForm);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        let id = window.location.pathname.split('/');
        id.shift();

        id = id[id.length - 1];

        setPostId(id);
        getPost(id);
        // eslint-disable-next-line
    }, []);

    const getPost = async id => {
        try {
            const _post = await PostService.get(id);

            setPost(_post);

            initForm(_post);
        } catch (error) {
            history.push('/');
        }
    };

    const initForm = post => {
        const values = {};

        values.title = post.data.title;
        values.body = post.data.body;

        form.setValues(values);
    };

    const onSave = async event => {
        event.preventDefault();

        if (form.valid) {
            setLoading(true);

            const body = {
                data: {
                    ...form.values,
                },
            };

            const _post = await PostService.update(postId, body);

            setPost(_post);
            setLoading(false);

            enqueueSnackbar(`${_post.data.title} post successfully updated`, { variant: 'success' });
        }
    };

    return (
        <div className={classes.root}>
            {post && <>
                <form
                    onSubmit={onSave}
                    className={classes.form}
                >
                    <FormGroup>
                        <TextField
                            label='Title'
                            value={form.values.title || ''}
                            onChange={form.onChange}
                            name='title'
                        />

                        <TextField
                            label='Body'
                            value={form.values.body || ''}
                            onChange={form.onChange}
                            name='body'
                            multiline
                        />

                        <Button
                            disabled={!form.valid || loading}
                            type='submit'
                            size='large'
                            className={classes.button}
                        >
                            Save
                        </Button>
                    </FormGroup>
                </form>
            </>}
        </div>
    );
}
