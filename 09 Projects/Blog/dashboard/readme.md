# Dashboard

## About

Blog dashboard is a simple react front-end app, used for managing / creating our blog posts, including:
- Sign up page
- Sign in page
- Private pages for post management
- Theming (ligh / dark UI theme)

## Getting Started

Install dependencies

```sh
  yarn
```

Run development

```sh
  yarn start
```

## Production

Build

```sh
  yarn build
```

Start server

```sh
  yarn start:server
```

## Notes

- **Material UI** - is a library of react components and utilities, used as a base for our custom react components. No need to reinvent the wheel, as they battle tested in production all their components, we can just extend their ie. Button component, and add some styles, and functionalities on top of it. It's super productive, clean, reusable and quality codebase.
- **JSS** - Material UI uses JSS (css in javascript), essentially each react component instead of creating a separate .css file for it, we will write css that is bound to that single react component in the same .jsx file, keeping it all in one place, clean and very dynamic, since JSS is written in javascript object, we can generate some dynamic values based on different props, theme, etc., that we can't do in regular CSS.
- **Material UI theme** - It's an object defining colors for fonts, backgrounds, styles for them, etc. and it's a react component wrapped around entire app, so all our react components will be children of it, and they will inherit theme colors. By doing that, it's then very easy just to update theme colors to lighter version (dark theme), and in very easy way our entire app switches to dark theme, since as i just said all our children components inherit colors, so they will just take on new lighter colors for the dark theme.
- **Server** - In here you'll see a server folder, it's just a very simple express app, that on any route request, just returns index.html, since that's where our react app lives. So express won't handle routing, our react app will, hence on any route we return our index.html (and inside is our react app), and from there react decides based on browser URL which page to route to in react.