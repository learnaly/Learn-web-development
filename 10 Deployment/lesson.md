# Deployment

## About

I'll try to be as brief as possible with this topic.

We wanna:
1. Setup automated tests, anytime we push an update to our API github repo, tests should be automatically ran and if they fail it will let us know.
2. Anytime we push and update to our API github repo, AND automated tests are successfull new version of our API will get deployed online.

## CI (Continuous integration)

Continuous integration is just a process between development and deployment.

### Quick terms

- Environment is a term that describes an instance of our app that's being used by specific group of people (developers, clients).
- In reality in github we have 2 branches at least, master and dev.
- Dev branch is where we always push our development code updates.
- To master branch we only push code from dev branch if we are very sure, and have tested code in dev branch first.
- We deploy separate versions of apps for both dev and master branch.
- Dev github branch deployed app version is used by developers to test the API and apps by hand (**DEVELOPMENT** ENVIRONMENT).
- Master github branch deployed app version is used by our actual end users, clients (**PRODUCTION** ENVIRONMENT).

## Problem

Now that you understand difference between **development** and **production** environment, imagine having built a very important app that makes you a lot of money, and you have it deployed to production, and one night you made as a developer some updates to that app, and introduced a bug that crashes the app, but now it's done, you pushed it to github, it got automatically deployed to prod env, and now app crashes for all your clients. That day you lost thousands of euros, because of a simple mistake.

## Solution

Automated tests prior to deployment. For your API's (back-end) and/or apps (front-end) you can use Circle CI among other tools that serve the same purpose to run tests that you wrote for your API for example, anytime you push code updates to that github repository.

If you have setup automated deployment for your API, and tests fail, automated deployment will be canceled, and API will not get deployed. Hence that mistake from problem described above, will never get deployed to your paying clients, and you'll be safe to fix that issue and push another now code update that passes all the tests you wrote.

If tests do pass however, and you have automated deployment setup, your API will get automatically deployed, right after tests are finished running, and successfully passing.

## Automated tests setup

You can do this for free.

This part of the tutorial assumes you already learned all prior tutorials, and you have an API and/or front-end (react, nextjs) app/s to deploy online.

Small disclaimer, i rarely write tests for my front-end apps as i see it as a huge waste of time in start up projects, where front-end at least in my so far experience is super dynamically and quickly changing, so there's no point investing a lot of time writing a test for a react component that's gonna be updated maybe fully in 4 days. In startups, we usually test those early front-end apps by hand, by using the apps.

Although there's a use case where you wanna test full integration ie. Next.js app actually talking to your deployed API and displaying stuff in a page. A use case i've implemented using **Cypress* testing framework that simulates an actual browser openning your app page/s and testing stuff displayed in those page/s like in real life.

Anyways, tests i ofc always write in heavy detail as much as i can are back-end or API tests, this goes without saying, but if your API fails, which is main enterance to your app most probably, then nothing will work, so you have to be 100% sure all API endpoints you have work as intended.

### How to

1. To setup automated tests for your API, include `.circleci` folder which is part of the folder this file is in, and copy it to your API project folder.
2. Push your API updates (including new .circleci folder) to your github repository.
3. Circle CI config file is included in that folder, and that's the structure they ask you to setup for their service to work as intended.
4. Circle CI config describes the process you want ran automatically every time you push a code update, in this example case our lint and tests are ran, and they both have to pass for entire test to pass successfully.
5. Now go to [Circle CI](https://circleci.com) and sign up for an account, using your github account.
6. Once you login and are in the Circle CI app, in left sidebar click on Projects, and you'll see all projects in your gitub repository.
7. Find your API repository, and click `Setup project`.
8. Once you approve and it's setup, in top right corner click on `Project settings > Environment variables`.
9. In environment variables add your private env vars you use for your API, like your database url, `DB_MONGO_URI` or however you named it.
10. That's it, so now anytime you push some new code to your github repo, github will notify Circle CI of this update, Circle CI will download your API github repository code, and run tests in it.

## Deployment

You can do this for free.

Now that we have automated tests setup for our API, we can now deploy our API.

1. To deploy apps go to [Heroku](https://heroku.com), and sign up for an account.
2. Once you've done that in middle left corner you can click on a dropdown and create 2 teams for example, front-end and back-end team. In front-end team you'll deploy front-end apps and in back-end team, back-end apps.

To create a team you have to add a debit / credit card, but it will not be charged if you stick with free dynos (heroku deployment options).

**Free option caveat** - Heroku gives you a free dyno in Personal account only. Dyno is just a server that will deploy your app online. The free version of it however sleeps and only wakes up once someone sends a request, waking up of the dyno can take some time, few seconds, so if someone hasn't entered your app for 15 min or so, that first request (openning the app) will take a bit longer, and then subsequent requests will be faster.

3. If you want a paid version enter your back-end team for example, otherwise stay at your Personal account in heroku and create a pipeline, and give it a name based on your API repository name. Pipelines are encapsulated space where you can deploy multiple versions of the same app. If you remember above about development and production environments in one pipeline we deploy development and production API versions, where development app deploys automatically in connection to our dev branch, and production app never deploys automatically, but only after we manually click deploy in connection to our master branch.

**Important**: Heroku only allows free versions of the apps in Personal account, not in custom created teams.

Once you created your pipeline, enter it, go to settings tab and search for and connect it to your API github repoistory you want deployed here.

4. Now go back to pipeline and click `Add app` in production column on the right (here for this example we will only deploy proudction (master branch) version of our API). Click create new app. Enter unique name and choose Europe, if you are in or near Europe.

5. Enter your app, go to settings and click Reveal config vars, and there add all your environment variables, like your database url, `DB_MONGO_URI` or however you named it.

6. In the same page below, click Add buildpack, choose nodejs if it's a nodejs API, and click save changes.

7. That's it, now you can go to deploy tab and choose a branch from which you want this app to deploy, and either click Enable automatic deploys if it's a development app version, or click manually Deploy branch at the bottom if it's a production version of the app.

7.1. Before you deploy though if your API server starts the production version of your API / app using a custom package.json command other than default `npm start`, you have to include Procfile in your github repository with line `web: yarn start:dev` for example if that's your custom command. Since by default heroku to start your API will by default if no custom command provided in Procfile, will call `npm start`.

8. You can follow their deployment logs, it will take few moments for heroku to download your API repository, install dependencies, run build and then start your server / app.

9. Once deployed in settings tab you can add a custom domain, if not, click at the top `Open app` to open it in a custom provided heroku URL.

### Deploying front-end app

I made my front-end projects in a way where deploying an API and react or next.js app is pretty much the same, so follow the process above.

How it works for front-end apps is that once you run `yarn build` react app code files get processed and they will all be stored in `build` folder. In that folder there will be index.html file with all react scripts dynamically inserted inside of it during react app build process.

To deploy a react app, i've just created a small one file express (node.js) server that on any GET request, for any path, always returns index.html, since routing in react is handled by react app itself, and shouldn't be handled by this small express server. Only job of the express server is to always send index.html as a response (that has react app inside that will handle everything else browser side), and serve static assets, meaning if you ask for `domain.com/images/my-image.jpg` and you have that image in your react codebase, you'll be able to see it in that URL in the browser.

## Other

To upgrade a dyno to a paid version that works non stop, there's a 7$ version per app. You can enter the app, go to Resources tab, and click on a little pen on the right side of the command that starts your app, choose a 7$ / month option and save it. Now your app will work fast 24/7.

That's pretty much it, with all of this knowledge above, now you can deploy your API's and apps, so other people can use them as well online.
