// eslint-disable-next-line
import { useState } from 'react';
import { cleanKey, copy } from '../../../utils';

function useForm(validate = null) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(false);

    const onChange = (event, custom = null) => {
        if (!event) {
            const _values = {
                ...values,
                [custom.name]: custom.value,
            };
            if (JSON.stringify(values) !== JSON.stringify(_values)) {
                setValues(_values);
            }

            return;
        }

        if (event.persist) event.persist();

        const { name, value } = event.target;

        const _values = {
            ...values,
            [name]: value,
        };

        if (JSON.stringify(values) !== JSON.stringify(_values)) setValues(_values);

        checkValidity();
    };

    const checkValidity = () => {
        if (!!validate) {
            setValues(v => {
                let _errors = '';
                if (validate) _errors = validate(v);
                if (JSON.stringify(errors) !== JSON.stringify(_errors)) setErrors(_errors);

                setValid(Object.keys(_errors).length === 0);

                return v;
            });
        }
    };

    const setValue = (key, value) => {
        let _v;

        setValues(v => {
            _v = {
                ...v,
                [key]: value,
            };

            return _v;
        });

        // Check for errors
        checkValidity();

        return _v;
    };

    const _setValues = a => {
        setValues(a);
        checkValidity();
    };

    const clear = () => {
        setValues({});
    };

    // Custom additions
    const setGroupValue = (group, index, key, _value) => {
        const v = copy(values);

        let value = _value;

        if (key === 'key') value = cleanKey(value);

        if (!v[group]) v[group] = [];

        v[group][index][key] = value;

        setValues(v);
    };

    const newGroupItem = (group, item) => {
        const v = copy(values);

        v[group].push(item);

        setValues(v);
    };

    const deleteGroupItem = (group, index) => {
        const v = copy(values);

        v[group].splice(index, 1);

        setValues(v);
    };

    const setError = (id, value) => {
        const e = { ...errors };
        e[id] = value;

        setErrors(e);
    };

    return {
        values,
        errors,
        valid,
        onChange,
        setValues: _setValues,
        setValuesNative: setValues,
        clear,
        setValue,
        setGroupValue,
        deleteGroupItem,
        newGroupItem,
        setValid,
        setError,
    };
}

export default useForm;
