/* eslint-disable */
import React, { useEffect, Suspense } from 'react';

export { default as history } from './history';
export * from './colorManipulation';
export * from './date';
export * from './theme';

export const lazy = _import => (
    React.lazy(async () => {
        try {
            const Component = await _import();

            const isJsChunk = (
                typeof Component === 'object' &&
                Component instanceof Object &&
                !!Component.__esModule &&
                Component.default instanceof Function
            );

            if (!isJsChunk) throw new Error('Not a javascript module: ', Component);

            return Component;
        } catch (error) {
            console.log('Lazy loading, error: ', error);

            // Clean all cache + reload
            if (caches) {
                caches.keys().then(names => {
                    for (let name of names) caches.delete(name);
                });
            }

            return window.location.reload();
        }
    })
);

export const lazyLoad = Component => props => (
    <Suspense fallback={<></>}>
        <Component {...props} />
    </Suspense>
);

export function retry(fn, retriesLeft = 5, interval = 1000) {
    return new Promise((resolve, reject) => {
        fn()
            .then(resolve)
            .catch((error) => {
                setTimeout(() => {
                    if (retriesLeft === 1) {
                        // reject('maximum retries exceeded');
                        reject(error);
                        return;
                    }

                    // Passing on 'reject' is the important part
                    retry(fn, interval, retriesLeft - 1).then(resolve, reject);
                }, interval);
            });
    });
}

export const wait = (milliseconds = 600) => new Promise(resolve => setTimeout(resolve, milliseconds));

export const copy = data => {
    try {
        return JSON.parse(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

export function getParams(str = window.location.search) {
    let queryString = str || '';
    queryString = queryString.replace(/.*?\?/, '');
    const params = {};

    if (queryString.length) {
        const keyValPairs = queryString.split('&');

        // eslint-disable-next-line
        for (const pair in keyValPairs) {
            const key = keyValPairs[pair].split('=')[0];
            if (!key.length) {
                continue;
            };
            if (typeof params[key] === 'undefined') {
                params[key] = keyValPairs[pair].split('=')[1];
            }
        }
    }
    return params;
}

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

export function cammelCaseToTitle(value) {
    let newValue = (value && value.split(/(?=[A-Z])/).join(' ').toLowerCase()) || '';
    newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);

    return newValue;
}

export function useInterval(callback, delay) {
    const savedCallback = React.useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        let id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}

export const parseError = (error, res = false) => {
    const data = error.data || error;
    if (res) return data;

    return (data.meta && data.meta.message) || data.message;
};

export const generateStrongPassword = () => {
    // eslint-disable-next-line
    const specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let password = '';
    password += specials.pick(1);
    password += lowercase.pick(6);
    password += uppercase.pick(1);
    password += numbers.pick(1);
    password = password.shuffle();

    return password;
};

// eslint-disable-next-line
String.prototype.cleanup = function () {
    return this.toLowerCase().replace(/[^a-z0-9-]+/g, '');
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

export const getProperty = (object, prop = '') => {
    try {
        let value = object[prop];
        const data = (object.object && object.object.data) || object.data || object;
        value = value || data[prop];

        if (!value) {
            if (data.properties) {
                const key = Object.keys(data.properties).find(k => k.toLowerCase() === prop.toLowerCase());
                value = data.properties[key];
            }
        }

        return value;
    } catch (error) {
        console.log(error);
        return '';
    }
};

export const isMobile = () => {
    let check = false;

    // eslint-disable-next-line
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
};

export const castParam = (_value, options = { number: true }) => {
    try {
        let value = JSON.parse(decodeURIComponent(_value));

        if (typeof value === 'number' && typeof _value === 'string' && !options.number) {
            value = String(value);
        }

        return value;
    } catch (error) { }
    return decodeURIComponent(_value);
};

export const cleanKey = value => {
    return value && value.replace(/\./g, '');
};

export const parse = value => {
    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
};

export const redirectTo = value => {
    return encodeURIComponent(value || (window.location.pathname + window.location.search));
};
