# Express (Node js)

## What is back-end, server?

You know when we said front-end app, and we talked about React, and Next.js, well those are javascript apps with which you interact in the browser.

Also remember the tasks for front-end where you had to use axios to make an HTTP request and fetch blog posts, by using that url, well that url is a url to the server (back-end) which processed our request from front-end and returned a response, that response containing our array (list) of blog posts, that we then rendered (added) into the home page.

Imagine a server like a piece of running software on your PC or laptop, and each deployed server has a URL (ie. myserver.com). So same as in front-end tasks, we would create a server app locally, deploy it somewhere, and have a URL that we can use to talk to our server, by sending requests to it.

## Request

HTTP request is a standard which describes a way apps and servers can talk to eachother.

HTTP request has:
1. Request URL - ie. myserver.com
2. Method - Get, Post, Put, Delete, other less important ones.
3. Request body (optional) - JSON object you would send as some data with your request.

### URL

URL - URL as you know in a way is things you enter in a browser, and URL itself is made of few things:

`https://myserver.com/posts?hasNext=true&total=true`

- https:// - Protocol (http or https), https means it has encryption, more secure.
- myserver.com - Domain (root path '/').
- /posts - Pathname (or for servers usually mentioned as **endpoint**)
- ?hasNext=true&total=true - Query params, each param separated with **&**

## How servers (or as it's called back-end) work

So back-end we are doing here, as i said is a program we are gonna build, which entire logic revolves around URL server is deployed at.

In the server we will very specifically create logic for paths we wanna handle, and HTTP methods with that path.

ie.
**/posts GET (get request)**
You'd send axios get request to 'myserver.com/posts'

and in our server app, we would handle this route (endpoint) with specific logic, maybe read in our DB, get some posts, and return them in the response.

**/login POST (post request)** \
Request body
```js
  {
    "email": "asd@gmail.com,
    "password": "Asdasd1"
  }
```

This would be a post request, and in our server if we get a request from front-end (at this URL), with HTTP method being POST method, then for that specific case in our server we would write some logic to handle this endpoint, ie. check if your password is correct, if yes, send you some login details.

**Our Task example**

`https://jsonplaceholder.typicode.com/posts`

This is a public server, where if we send a GET request to **/posts** as we did in our React and Next.js tasks, response we get from their server is JSON array of 100 blog post objects with some data inside.

So we are gonna do a very similar thing, just in our own server. :)

## API

API (Application programming interface) all of the above is commonly called API.

Imagine API just being same as if you buy a TV, and they tell you, listen your TV remote has those 5 buttons, each button does something else, when you click it you get a response.

That's API for your TV, stuff you can click, to get some action from your TV. :)

Well API in context of a server, is endpoints above you can handle in your server, where each endpoint does a specific thing in your server, and returns a specific response to the front-end.

So from now on, we will call them API endpoints.

And instead of we are building a server or back-end, we'll say, we are creating an API, just so we are on the same page, 15 terms, same thing. :)

## Why API?

Let's say we have a database, and we have a front-end app which basically save contacts for each user, like you have on your phone.

Why wouldn't we have URL to our database, and just send our data directly from front-end app into our DB. Well you could, but that would be very bad, as anyone could use that URL and steal your data, or use your own DB for their own purpose.

It would be like you handing off money to someone casually.

Why server then, well server is like a middleman:
1. You would send email password, if server says you are registered and allowed to make requests, server send you some token (string).
2. With every following request you would send that token in HTTP request header, so server knows you are authenticated and can make requests.
3. Then if in following request you wanna read your own contacts, you ie. send a GET request to myapi.com/contacts,  server then fetches only contacts you made from DB and sends them back to your front-end app as a JSON response.

Mind you server is deployed somewhere safe, where only server has access to a secret DB url, no one else has that access. So server is safe to contact DB correctly, but front-end app isn't.

So that's why we create API's as middleman in a way so our front-end app can talk to our DB in a secure way.

### Status codes

Status code is some number we send back in our API along with the response data, to indicate to the front-end if the request was successfull, there was an error, what type of error, etc.

Usually we'll send back `200` code if request was success. \
Or `400` code if there was an error. \
401 if authentication failed on login, etc.

You can read more about types of codes, you don't need to memorize any of them, this is just so you know what it is.

[HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## How to

## Node.js

As i already mentioned in Environment setup tutorial, Node.js is javascript language but used on server (PC), instead of a browser, so syntax is the same, you just have access to your PC API like file storage, etc.

Writing API server in Node.js is very cumbersome, you need a lot of setup code just to do even simple things, hence, same principal we have React for creating front-end apps, not to create all that in raw JavaScript, we have Express which is also a framework (library), but for creating API servers.

## Express

1. First let's initiate a project, create a folder, enter it in console, and run `npm init`, give project a name and whatnot.
2. Now you have package.json, you can install express, `npm install express`.
3. Now let's create a very simple, one file server.
4. Create /src/index.js file.
5. In that file add:

```js
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
```
6. In package.json scripts, for start command add **node ./src**.
7. Now in your console just type `npm start` and go to your browser visit `http://localhost:5000` and `/posts` as well.

That's it. :) \
You've just made your first API server (back-end).

This is how complicated is to create an API at least simple one, not hard right? :)

### What's next

For now that's it, go do your task, and in next tutorial, we will actually use a real DB where we will write data into, and read data from, to return to our front-end.

## Example Express

You can find small Express app code example in `example` folder in this (same) folder.

You can copy these lessons folders locally, enter that folder in your PC console in VScode, and run `npm install` and after `npm start` to start the app, app will be running on `http://localhost:5000 in your browser.

# Task

View your task in **Task** folder in this folder.

## Reference

- [Express](https://expressjs.com)