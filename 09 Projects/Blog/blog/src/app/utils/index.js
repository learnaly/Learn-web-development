
export * from './colorManipulation';
export * from './theme';

export const copy = data => JSON.parse(JSON.stringify(data));

export const wait = (milliseconds = 600) => new Promise(resolve => setTimeout(resolve, milliseconds));

export const capitalize = (value, lowercase = true) => {
    if (value === 'apiKeys') return 'API keys';
    if (value === 'organizationApps') return 'Organization apps';

    if (value && typeof value === 'string') {
        const v = lowercase ? value.toLowerCase() : value;
        return `${v.charAt(0).toUpperCase()}${v.slice(1)}`;
    } else {
        return value;
    }
}

export const normalize = (value, cap = true) => {
    if (!value) return value;

    let v = String(value);

    if (cap) v = capitalize(v || '');

    return v
        .replace(/(-|_)/ig, ' ')
        .replace(/\b(api)\b/ig, 'API')
        .replace(/\b(ui)\b/ig, 'UI')
        .trim();
};
