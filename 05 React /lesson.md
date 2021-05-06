# React

## About

Imagine bulding an entire app with pure HTML, CSS and raw JavaScript.

Let's imagine we have a blog home page, where we see list of blog posts, on that HTML page load (window.onload), we would have to make an HTTP request to a blog API to get all blog posts we wanna display, then save them in some variable.

Then we would take those posts, probably get a blog posts list container (HTML div) and loop through blog posts we fetched, and for each blog post create an HTML element in JavaScript and append it ourselves into that blog posts list container.

And this is a very simple use case, imagine having very complicated flows where we have to render a lot of stuff in the DOM, remove it from DOM, make updates all the time, we would have to do it all in raw JavaScript by hand (fetch HTML elements, remove stuff from them, append new stuff, update text content, classes, CSS, etc.).

That's where front-end frameworks come in, they help you with very few lines of code achieve all of above said. It's amazing. You can build very complicated apps, very cleanly and efficiently.

Now front-end frameworks, are usually installed locally on your PC, you initiate them in your PC console to start a new project, work on creating code in your app, then there's a command you are run in the PC console to build your app, and voila, that's it, now your built apps is what you deploy (run in the browser).

You don't have to know goes on into building your app or any of that stuff, you just have to learn to use this tool, and that's it. But, in short, building your app actually means all those front-end framework files are compiled into normal **.js**, **.html** and **.css** files, but more effectively than most people would make in a raw way by themeselves by hand.

## Install

To run react locally, you have to go through our 04 Environment setup (previous lesson), as we need Node.js installed on your PC or macOs.

There's an NPM (repository for javascript libraries) library to help you generate a boilerplate for a react app.

Follow [create react app](https://github.com/facebook/create-react-app) instructions, to install and run it.

Now package.json is just one file with all the PC console commands for any front-end, back-end javascript project. For react app you have a command to build (`npm run build`) and run (`npm start`) commands.

## How it works

React essentially compiles to regular javascript, but from face side of it, for you as a developer, to create a react component it's just a normal javascript function which either returns a value or jsx.

JSX looks like regular HTML really with few differences.

### Props

Every component can receive props. Props are HTML like attributes you can add on to your react component. Value of those props can be anything: string, number, array, object, undefined, function, etc.

```jsx
  function Button(props) { // Each react component has props as first argument, and it's an object with all the props passed onto this react component

    return (
      <button>
        {props.title}
      </button>
    );
  }

  <Button
    title='My custom button title prop' // This is what's called a property, and it's a regular string just use quotes
    title={<h1>My custom button title prop but as an HTML element</h1>} // If it's anything other than string as a value of the prop, use curly brackets
  />
```

### Variables

To insert a variable inside you use `{variable}` currly brackets.

```jsx
  function Button(props) {

    return (
      <button>
        {props.title} // This is how you insert a variable into your JSX (React HTML per say)
      </button>
    );
  }
```

### Event listeners

To attach an event listener add it as a prop on your react component, in camelcase format (onclick -> onClick).

```jsx
  <Button
    onClick={event => console.log('Clicked!')}
  />
```

Isn't this so much easier than doing it all by hand in raw JavaScript. :)
You'd just for this in raw JS have to probably add an ID to this button, get it with document.getElementById and attach a `onclick` event listener on it.

### Adding regular HTML attributes

You can add any normal HTML attribute to react components in camelcase way.

#### Style

```jsx
  <Button
    style={{
      fontSize: 12,
      backgroundColor: 'orange',
      color: 'white',
    }}

    disabled
  />
```

#### Class and id

Class is a bit different, here it's called `className` instead of `class`, `id` is named the same.

```jsx
  <Button
    className='cat animal'

    id='sebastian'
  />
```

See it's not that different, just way easier than doing it all by hand in raw JavaScript. :)

### Conditionals

If you want to conditionally render something in the react components JSX, use curly brackets and a conditional expression. If expression returns false, it'll not be rendered, if it returns true, it will.

```jsx
  function Animal(props) {

    return (
      <div>
        {props.type === 'cat' ? <div className='voice'>Purr</div> : null}
      </div>
    );
  }

  or cleaner way

  function Animal(props) {

    return (
      <div>
        {props.type === 'cat' && <div className='voice'>Purr</div>}
      </div>
    );
  }
```

### Lists

To render all items from a list into react component JSX, use array map function and for each item return what ever you want rendered.

```jsx
  function ShoppingList(props) {

    return (
      <ul>
        {props.items.map((item, index) => (
          <li
            key={index}
          >
            {item.title}
          </li>
        ))}
      </ul>
    );
  }
```

Note:
- When rendering list of items like this, each item has to have unique `key` prop, for react to render them properly, without bugs.
- Since index of each item is unique information for each item in this list, we can use that as key prop's value.

## State and Lifecycle

### State

State is basically handling changes of variables within your component.

You can manage state using `useState` react hook.

Hooks are just functions that return usually 2 values, value of that hook (state) and a function to update that value, that's it. :)

```jsx
  import React, { useState } from 'react';

  function Cat(props) {
    const [pur, setPur] = useState(false);

    return (
      <div>
        <button
          // Update pur state using setPur update function
          onClick={() => setPur(!pur)} // ! in front of a variable will set it to opposite boolean value of what it currently is !true === false OR !false === true OR !'asd' === false
        >
          Toggle pur
        </button>

        {pur && <div className='action'>Purrring</div>} // We are here conditionally rendering this <div /> element based on our `pur` state
      </div>
    );
  }
```

It looks maybe hard as you are seeing it probably for the first time, but it's very easy and intuitive, once you get use to it. :)

### Lifecycle

It's a react hooks as well, named `useEffect`, but it will run conditionally every time some of second argument values change. It's very usefull in apps, you'll better understand on actual examples later in tutorial.

```jsx
  import React, { useState, useEffect } from 'react';

  function Cat(props) {
    const [pur, setPur] = useState(false);

    // First argument is a function to run
    // Second argument is list of simple values, if value is different in current render cycle, compared to previous re-render of this react component, first argument (function) will run
    // Sounds more complicated than it is :)
    useEffect(() => {
      console.log('Current pur state is: ', pur);
    }, [pur]);

    return (
      <div>
        <button
          // Update pur state using setPur update function
          onClick={() => setPur(!pur)} // ! in front of a variable will set it to opposite boolean value of what it currently is !true === false OR !false === true OR !'asd' === false
        >
          Toggle pur
        </button>

        {pur && <div className='action'>Purrring</div>} // We are here conditionally rendering this <div /> element based on our `pur` state
      </div>
    );
  }
```

## Routing

And finally last, but not least, react routing.

Routing is super useful in front-end apps, where based on some condition it renders in the web page some react components (pages).

Use cases:
1. If you are on home page (/ root url), app should display <Home /> react component (represents home page).
1.1. If you are on about page (/about url), app should display <About /> react component (represents about page).
2. Maybe you have a page which is only displayed if user is logged in, otherwise it shouldn't be accessible.

Routing is done using mostly <Switch /> react component.

```jsx
  import React from 'react';
  import { Switch, Route, Redirect } from 'react-router';
  import { AuthService } from './services';

  import Home from './components/Home';
  import About from './components/About';
  import Profile from './components/Profile';

  function App(props) {

    return (
      <div>
        <header>...</header>

        <main>
          <Switch>
            <Route
              path='/'
              component={Home}
            />
            <Route
              path='/about'
              component={About}
            />

            {AuthService.isLoggedIn && (
              <Route
                path='/profile'
                component={Profile}
              />
            )}

            <Redirect
              to='/signin'
            />
          </Switch>
        </main>

        <footer>...</footer>
      </div>
    );
  }
```

## Wrap up

This is basically all you need to build most use cases, and very complicated apps, using just tools above.

They are all easy to work with, once you use them a bit, and understand how it works, which just takes a little practice.

## Example React

You can find small React app code example in `example` folder in this (same) folder.

You can copy these lessons folders locally, enter that folder in your PC console in VScode, and run `npm install` and after `npm start` to start the app, app will be running on `http://localhost:3000 in your browser.

# Task

View your task in **Task** folder in this folder.

## Reference

- [React](https://reactjs.org/)