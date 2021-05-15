import React, { useState } from 'react';
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
}), { name: 'PostNew' });

function validateForm(values) {
    const errors = {};

    if (!values.title) errors.title = 'Title is required';
    if (!values.body) errors.body = 'Body is required';

    return errors;
}

export default function PostNew() {
    const classes = useStyles();
    const [loading, setLoading] = useState();
    const form = useForm(validateForm);
    const { enqueueSnackbar } = useSnackbar();

    const onCreate = async event => {
        event.preventDefault();

        if (form.valid) {
            setLoading(true);

            const body = {
                data: {
                    ...form.values,
                },
            };

            const _post = await PostService.create(body);
            console.log('Post created: ', _post);

            setLoading(false);

            enqueueSnackbar(`${_post.data.title} post successfully created`, { variant: 'success' });

            history.push(`/posts/${_post.id}`);
        }
    };

    return (
        <div className={classes.root}>
            <form
                onSubmit={onCreate}
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
                        Create
                    </Button>
                </FormGroup>
            </form>
        </div>
    );
}
