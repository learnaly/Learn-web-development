const bcrypt = require('bcrypt');

exports.hashPassword = async password => {
  const saltRounds = 10;

  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function (error, hash) {
      if (error) reject(error);

      resolve(hash);
    });
  })

  return hashedPassword;
};

exports.capitalize = value => {
  if (value && typeof value === 'string') return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

  return value;
};

exports.parseValidationErrors = _errors => {
  const data = {};

  _errors.errors.map(error => {
    let title = error.instancePath.split('/').filter(Boolean).map(word => word.split('.').join(' ').trim());

    if (error.params.missingProperty) title.push(error.params.missingProperty);

    title = title.filter(Boolean);

    if (!title.length) title.push(!error.instancePath ? 'request' : error.keyword);

    title = title.map(word => word.replace(/\[|\]|\\|\'/g, ' ').replace(/\s+/g, ' ').trim()).filter(Boolean);

    // const shortTerm = title[title.length - 1];
    const longTerm = title.join(' ');

    data[longTerm] = error;

    return error;
  });

  return data;
};
