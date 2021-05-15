
module.exports = {
  file: [
    'test/helpers/setup.util.js',
  ],
  recursive: true,
  exit: true,
  diff: true,
  extension: ['js'],
  opts: false,
  package: './package.json',
  reporter: 'spec',
  slow: 200,
  timeout: 7000,
  spec: './test/**/*.test.js',
};

