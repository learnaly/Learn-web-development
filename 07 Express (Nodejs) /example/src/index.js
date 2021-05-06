const express = require('express');
const app = express();
const PORT = 5000;

// We are defining our API endpoint route '/' whenever someone vists it
// We handle it with method below, in this case we just simply return 'Hello World!' as a response
app.get('/', (req, res) => {
  const data = {
    response: 'Ok',
  };

  // We are returning now JSON response now to the front-end
  return res.status(200).json(data);
});

app.get('/posts', (req, res) => {
  const data = {
    response: [
      {
        title: 'Post 1',
        body: 'Asd asd asd',
      },
      {
        title: 'Post 2',
        body: 'Asd asd a',
      },
    ],
  };

  return res.status(200).json(data);
});

// Buy calling listen method, and passing a PORT, you are initiating your API server to run and listen for incoming requests
app.listen(PORT, () => {
  console.log(`API server app, running on http://localhost:${PORT}...`);
});