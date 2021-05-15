const moment = require('moment');

exports.getTimestampMilliseconds = () => moment().utc().valueOf();

exports.getTimestamp = () => moment().utc().unix();

exports.getTimestampISO = (date = new Date()) => moment(checkDate(date)).utc().format();

exports.getTimestampAddDays = days => moment().utc().add(days, 'days').unix();

exports.getTimestampAdd = (value, type, date = new Date()) => moment(checkDate(date)).utc().add(value, type).unix();

exports.formatDate = (format = 'DD MMM YYYY @ HH:mm', date = new Date()) => moment(checkDate(date)).utc().format(format);

const checkDate = value => {
  // tslint:disable-next-line
  if (typeof value === 'number' && String(value).length === 10) value *= 1000;

  return value;
};
