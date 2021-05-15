import moment from 'moment';

export const getTimestamp = (date = new Date()) => moment(checkDate(date)).unix();

export const getTimestampUTC = (date = new Date()) => moment(checkDate(date)).utc().unix();

export const getTimestampISO = (date = new Date()) => moment(checkDate(date)).format();

export const formatDate = (date = new Date(), format = 'h:mm A DD MMM, YYYY') => moment(checkDate(date)).format(format);

export const formatDateUTC = (date = new Date(), format = 'h:mm A DD MMM, YYYY') => moment(checkDate(date)).utc().format(format);

export const timeAgo = (date = new Date()) => moment(checkDate(date)).fromNow();

const checkDate = value => {
    // eslint:disable-next-line
    if (typeof value === 'number' && String(value).length === 10) value *= 1000;

    return value;
};
