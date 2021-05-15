import { capitalize } from '../../../utils';

export default function validate(value, type, required = true, options) {
    let pattern;

    if ((required && (typeof value === 'string' && !value.trim())) || !value) {
        return `${capitalize(type)} is required.`;
    }

    switch (type) {
        case 'email':
            pattern = /\S+@\S+\.\S+/;
            return pattern.test(value) ? '' : 'Email is invalid.';

        case 'password':
            pattern = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))/;
            return pattern.test(value) ? '' : 'Password is weak. Use at least 8 characters, one lowercase, one uppercase letter and a number.';

        default:
            return '';
    }
}
