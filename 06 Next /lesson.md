# Next.js

## Issue with React

React is a very good front-end framework, but that way it works is when you locally build the app it generates index.html file and bunch of javascript files in which all your react components, and app logic is.

When someone enters your app, server sends to the browser index.html file (empty), but with links to those react built javascript files.

React then takes some time in milliseconds usually to parse your react components and then attach all the HTML into index.html based on your react components.

Now, there's a problem with that. SEO.

### SEO

SEO (Search Engine Optimization) - Is google for example sending bunch of little servers (workers) to visit your website, and first .html response they get as soon as they visit your web page / app is the content they will try to remember, so you can rank on Google in search results. But, as i said first response they get back they try to parse and save, issue with react as i said above is first response in empty index.html, and react just gets rendered right after.

All this means React apps at least at the moment are not indexable by most search engines.

### Next.js to the save

What Next.js does, is server side, when you enter the webpage, instead of sending empty index.html with javascript files which later render HTML from react components, Next.js preparses all react code in that page, creates HTML out of it, and then sends the fully rendered HTML page as a first response, and after that in front-end app continues as normal react app.

So just that first response from the server is fully rendered HTML page (prerendered on the server). Meaning Google bots will be able to index your web pages.

## React vs Next.js

### React

React is way simpler to use than Next.js, but, you should only use it for projects where you don't care about SEO (maybe later Search engines will get smarter, and this issue will be fixed). For now only use React in private apps, dashboard, etc. Complex apps where it requires authentication (login), where SEO makes no sense anyways, which is majority of use cases for front-end apps.

### Next.js

As you'll see soon, Next.js is not that hard, but a lot harder to scale that codebase, than React's codebase, so only use it for use cases like magazine web apps, online shops, blogs, etc. Where pages must be indexable by search engines, but app doesn't have crazy complexity, ie. you have main page, product page, etc. some client facing public data.

So projects like that are manageable to code in Next.js without too much hastle, and it does the job for SEO.

## Install

To run Next.js locally, you have to go through our 04 Environment setup (previous lesson), as we need Node.js installed on your PC or macOs.

There's an NPM (repository for javascript libraries) library to help you generate a boilerplate for a Next.js app.

Follow [create next app](https://nextjs.org/docs/api-reference/create-next-app) instructions, to install and run it.

Now package.json is just one file with all the PC console commands for any front-end, back-end javascript project. For Next.js app you have a command to build (`npm run build`) and run (after deploying online) (`npm start`) commands, and run locally (`npm run dev`).

## **How it works**

Key differences between Next.js and React:

## Routing

In React as you now know we have `<Switch>` react-routing component, where it renders route conditionally on current URL path, or other custom checks. And this is very scalable, as you can have nested routing, you can have header, main, and footer in central component, and in main HTML element just put `Switch` component, to render routes (home, about, etc.) depending on URL, so only in one place you add header and footer, and middle part (page) conditionally loads.

Major difference in Next.js, is each route (page) is it's own file. Which is very bad for scaling, but, we only use next.js for apps like online shops, where you have home page, and maybe just another page which is product page (product page dynamically fetches the product and shows it to the user).

All route components (pages) are placed inside pages folder, and index.js file is considered to be the root path page (mydomain.com > /pages/index.js), (mydomain.com/about > /pages/about.js), etc.

[More about routing](https://nextjs.org/docs/routing/introduction)

### Routing pages/_app.js

_app.js file in pages is just a main entry point to your app that Next.js uses, imagine it being a React component parent to your entire app. Which is very useful if you wanna put some react components that will be globally used for your entire app, like theming, etc. More on that down the road.

So for now, it is what it is, you don't need to understand much about it atm, just skip over it and focus on rest of the stuff for your app. :)

## CSS

For css differences you need to create files called [file_name].module.css put them in styles folder, and then import them in your react components (pages), and use it like:

```jsx
  import StylesHome from '../../styles/Home.module.css';

  function Home(props) {

    return (
      <div className={StylesHome.root}> // .[whatever className you have in that css and you wanna attach to the element]
        Home
      </div>
    );
  }
```

## Other

Other stuff that's a bit different is linking (navigating to other pages), etc. But all that stuff is less important atm, what is important is for you to start of with this, and as you go, you'll easily add to your knowledge.

Most other stuff, is same as regular React, like props, useState, useEffect hooks, etc.

## Create next app file organization

I usually don't use exactly folder / file organization that create next app generates for you, but that's gonna be used only for example code in this folder.

But for the task at the end, you'll see my own solution to the task, and how it looks, nothing too much different, just a bit more consistent, with our React app folder / files structure.

## Example Next.js

You can find small Next.js app code example in `example` folder in this (same) folder.

You can copy these lessons folders locally, enter that folder in your PC console in VScode, and run `npm install` and after `npm run dev` to start the app, app will be running on `http://localhost:3000 in your browser.

# Task

View your task in **Task** folder in this folder.

## Reference

- [Next.js](https://nextjs.org)