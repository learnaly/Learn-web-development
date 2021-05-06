const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  const data = {
    response: 'Ok',
  };

  return res.status(200).json(data);
});

app.get('/contacts', (req, res) => {
  const data = {
    response: [
      {
        name: 'John Doe',
        number: 123,
        email: 'john@gmail.com',
      },
      {
        name: 'Maria Iva',
        number: 1234,
        email: 'maria@gmail.com',
      },
    ],
  };

  return res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`API server app, running on http://localhost:${PORT}...`);
});