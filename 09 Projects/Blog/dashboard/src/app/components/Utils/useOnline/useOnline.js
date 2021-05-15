import { useState, useEffect } from 'react';

import { useInterval } from '../../../utils';

export default function useOnline() {
    const [online, setOnline] = useState(!!window.navigator.onLine);

    const checkOnline = () => {
        if (window.navigator.onLine) {
            if (!online) {
                setOnline(true);
            }
        } else {
            if (online) {
                setOnline(false);
            }
        }
    };

    useEffect(() => {
        checkOnline();
        // eslint-disable-next-line
    }, []);

    useInterval(checkOnline, 1500);

    return online;
}
