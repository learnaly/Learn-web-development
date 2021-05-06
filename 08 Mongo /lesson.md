# Mongo DB

## What is a database?

Database is a server (like one we made previously), that receives some read / write requests.

Read requests meaning a query to read something from the DB, and return it in a response.

Write requests meaning sending some data to be written in the DB.

Imagine database being a folder in your PC, and in that folder you have many additional folders, each additional folder being a group of some type of data (collection). And in each collection folder you have a lot of files, each file being an inserted document in the DB collection.

Let's say we are create a contacts app. \
In our app we have:
1. Accounts - People using our apps.
2. Contacts - Each account can save many contacts (objects).

So in our DB we would create 2 collections, **accounts** and **contacts**.

And whenever someone singups for our app, we would create a new account object, and save it in accounts collection. \
Whenever that account creates a new contact, we would create a new contact object, and save it in contacts collection.

From there we just read account details from accounts collection, and contacts from contacts collection, and through our API return that data to the front-end, and then front-end just displays it on the page.

Principal wise, that's all, really. :)

Not crazy hard at all, just multiple pieces: front-end, back-end and database. When they all come together we have a full stack system (full stack meaning you can build both front-end and back-end, not just one of them). Which is a lot more valuable than just being able to do one in a way.

## About Mongo DB

Mongo DB is document based database, where in each collection (ie. **accounts**) you can put any kind of object, each object potentiall having different properties and values. \

It's perfect for browser apps, as schemas (schema is how account object looks, what properties and values it has, we can define anything we want for it) are fast changing as we are developing the project.

## Install

We will use managed Mongo DB (Atlas Mongo DB), meaning a service online where you can sign up for free, create a database, and use link they give you to connect to it from your Express (Node.js) app, so you can write / read stuff from your DB.

### Sign up

[MongoDB singup](https://www.mongodb.com/try)

1. Fill in sign up details.
2. Put whatever for your organization name.
2.1. Put **Learning** for project name.
3. Click far right **Create cluster** (start at Free), meaning free version.
4. Choose provider AWS.
5. Choose region Germany.
6. Now wait for a little while for your cluster to get setup (DB).

### Create DB

1. If you don't see a huge block that says **Cluster0**, click on **learning** in breadcrumbs above in the page.
2. Inside Cluster0 click on collections.
3. Now click on **Add your own** in the box in the middle of the page. Here we are creating our database name.
4. For db name put **blog**, for first collection name put **posts**.
5. That's it our database has been created. :)

### Database Access

1. Now once DB is ready, we have to create a database user and password, so you can access your DB, this is very important, and DO NOT SHARE it with anyone, so someone doesn't get access to your database.
2. In top left, click Security > Database Access.
3. Custom role > Add new custom role.
4. In custom role window, put **developer** for custom role name.
5. Now we have to add a lot of different actions to this role, for each action click on **Action or Role** and start typing each one and select it:
- Action or role: **find**; Database: **blog**;
- Action or role: **insert**; Database: **blog**;
- Action or role: **remove**; Database: **blog**;
- Action or role: **update**; Database: **blog**;
- Action or role: **bypassDocumentValidation**; Database: **blog**;
- Action or role: **createCollection**; Database: **blog**;
- Action or role: **createIndex**; Database: **blog**;
- Action or role: **reIndex**; Database: **blog**;
- Action or role: **listIndexes**; Database: **blog**;
- Action or role: **listCollections**; Database: **blog**;
6. Click **Add Custom Role** green button.
7. Now let's create an account, and attach this role to it. Click Database users > Add New Database User.
8. For user name put your name ie. john-doe.
9. For password click autogenerate secure password, and save it somewhere.
10. For database user privilegies, in dropdown at the bottom click on **Select pre-defined custom role** and choose developer (Custom role we just created previously).
11. Click **Add user** green button.
12. That's it, we've now created a user that has specific access to our DB.

### Why database user and custom user role?

This is very important, as we previously said, you don't want to leak your user name and password to your DB in the first place, so someone doesn't steal or messes with your data.

But even if someone does, you can immediatelly disable this user or his custom role, so they can't do anything if you happen to leak it.

Also, if you have different type of employees working with your DB, you wanna create different type of roles for each of them. \
Ie. for admins give full access, to some other developers let them only read from the DB, but don't let them be able to delete documents from collections or even delete entire collections, etc.

## Allow access from everywhere

Here we add even more granularity to DB access, not just that we have a specific username and password, but also, above that you can specify even only which IP address can make requests to our DB.

In our case we'll allow access from anyone.

1. Click on **learning** in breadcrumbs to go back to the page, where you see our clusters (ie. Cluster0).
2. Click connect.
3. Click **Allow access from anywhere**.
4. Click **Add a connection IP address**.

## Database connection URL

1. In Cluster0 click on connect, if you are not already there.
2. Click **Connect your application**.
3. Now you'll see a URL like: \
`mongodb+srv://john-doe:<password>@cluster0.zpwxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` or \
`mongodb+srv://<username>:<password>@cluster0.zpwxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

So just replace `<username>` with your account username we've created earlier, and `<password>` with that account's password.

Again, do not share that final link (with account username and password added to the URL), but that's the URL we'll need next for our Express API to connect to.

## Wrap up Mongo setup

All of this sounds like a lot of information, but what it really is, is in Mongo Atlas service, you can have multiple projects, each project can have multiple clusters, and each cluster is just a group of multiple databases. And each database has multiple connections.

So in our case it's:

`Learning (Project) > Cluster0 (Cluster) > blog (DB) > posts, accounts, etc. (Collections)`

## **Express + Mongo DB**

Now that we have a URL to our database that we can read / write into, let's update our previous Task from Express (Node.js) tutorial, and add actual database to read / write into. :)

Only addition we will make is install `mongodb` library, connect to our Mongo DB (URL we got), and from there, on different requests, read / write to the database.

## Mongo connect

1. Install `mongodb` `npm install mongodb`.
2. We are gonna make a promise function, that we can just await once DB is connected.

If you remember `async / await` syntax we used for waiting for actions that may take some time, well we can artificially create a function that will take some time and await for it, it's called `Promise`.

```js
  const promise = new Promise((resolve, reject) => {
    resolve();
  });

  await promise;
```

Basically whenever inside promise function you call yourself, resolve or reject, only that awaiting will finish. So if you have some actions that you know will take some time, you can create a promise to make your code cleaner, and just await it in one line of code.

Great use case is us connecting to a DB, that we wanna await for.

```js
const { MongoClient } = require('mongodb');

const mongo = {
  db: '',
  client: '',
};

const connectToMongo = () => new Promise((resolve, reject) => {
  MongoClient.connect(
    '<Our mongo URL>',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error, client) => {
      if (error) throw new ConnectionError(error.message);
      console.log('Mongo has connected');

      // Client is like our currently running connection to mongo from our server
      mongo.client = client;
      // DB is actually access to our blog db
      mongo.db = client.db('blog');

      return resolve();
  });
});

await connectToMongo();

// In this line after it, if we connect successfully
// we can already use our mongo db

const collection_posts = mongo.db.collection('posts');

const my_posts = await collection_posts.find();
```

It maybe sounds complicated to a beginner, but that's it, you don't have to memorize or understand every single detail in the beginning, it's important just that you have this code you can copy / paste reuse, as you know you'll need it, and that's it.

Later once this becomes muscle memory to you, then you'll try to understand every line of code here.

For now just know this is what has to happen for you to talk to your db from you server, and that's all. :)

We all went through these learning phases, it's nothing new or special, just takes some time.

## Postman

You can test your API you are running locally using Postman.

[Postman install](https://www.postman.com)

It's pretty intuitive, when you open it, you can enter your API url (http://localhost:5000), type of HTTP request (GET, POST, etc.), pass request body, and so on.

If you need more info on it, quick google easily does it. :)

## Example Express + Mongo

You can find small Express app with Mongo code example in `example` folder in this (same) folder.

You can copy these lessons folders locally, enter that folder in your PC console in VScode, and run `npm install` and after `npm start` to start the app, app will be running on `http://localhost:5000 in your browser.

# Task

View your task in **Task** folder in this folder.

## References

1. [Express Mongo connection](https://expressjs.com/en/guide/database-integration.html#mongodb)
2. [Mongo API](https://docs.mongodb.com/manual/introduction)



