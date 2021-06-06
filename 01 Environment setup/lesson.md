# Environment setup

## About

We will install few tools we will need to build web apps.

I am personally working on Mac OS (Apple's operating system), which is way easier, and more efficient for coding to be honest, BUT, most people will start of with Windows, so i'll try to be aware with instructions having Windows in mind.

Also if you do get stuck, feel free to google or ask questions.

## **Tools**

## VScode

VScode is a code editor, very useful for organizing your app files and folders, highlights the syntax, etc.

[VScode download](https://code.visualstudio.com) and install it.

After installing it:

1. Open VScode, in the left there's a vertical dark bar, 3 icon from top is plugins, click it, and install:
- Beautify
- EditorConfig for VS Code
- ESLint
- Github Theme
- Material Icon Theme
- Path Intellisense

2. After that bottom icon (settings), click it, and choose settings.

3. Once in settings page, click icon in top right corner, 3rd one from the right, you'll see javascript like object, copy there contents of **settings.json** that you can find in folder of this lesson, and save.

4. Now we have VSCode setup you can in top menu click terminal > new terminal, terminal will open at the bottom (console we mentioned before, similar to browser console, just this one is for your windows system, don't be scared).

In that terminal, in the top middle, there's a select input, choose **powershell** if you see it.

5. In the left side of the dark bar, at the top, click the icon, and sidebar will appear if it wasn't there before.

In this sidebar you can organize your files and folders.

In the menu above, click file > Add folder to the workspace (prior to that in Downloads, or Documents, wherever create a folder **lessons**), and now select that folder.

Now we've added our main folder for lessons in VScode, so from here we can just create more folders, and files in that folder from VScode.

6. In terminal at the bottom, you can navigate into this **lessons** folder using following syntax:

```bash
  cd - used navigate the folders in console
  ../ - goes one folder level back
  cd lessons - goes into the lessons folder (if that's the folder in your current path you are in)
  pwd - Shows you path you are currently on, probably something like C:\Users\<your name>

  // If you are at that path, and you created lessons folder in Documents for example, you can enter it with
  cd Documents/lessons // Your new path will be C:\Users\<your name>\Documents\lessons

  // If you need to go back just type
  cd ../ or cd ../../  // however many folder levels back
```

## Node.js

Node.js is a JavaScript language, but for the operating systems.

Before, JavaScript was only used in browsers, but it was then extended also for creating servers, meaning it can be used in operating systems as well. When we are coding apps even just for the browser locally we have to install some JavaScript libraries, etc. and it all works using node.js, running the app dependencies install, running app build, etc.

[Nodejs download](https://nodejs.org/en/download) and install it.

After installing it, close your VScode, and reopen it.

In terminal type `node -v` and `npm -v` if it gives you a version, it means it's installed correctly.

FYI, you can type **clear** in powershell terminal (console) to remove all so far text in it.

### Test node

To test it a bit more, navigate in console into your lesson folder, create a file called **test.js**

Add in it:

```js
  console.log('Yay, node.js works');
```

And then in your console type `node test.js` and if it logs that in the console, great, we are there. :)

## Git

At the moment if you have a .txt file, and you wrote something in it, then later you removed all the content inside, and wrote a new thing, saved the file, then remembered initial content you had was correct, but it's too late now, you overwrote what you had initially when you saved the change, and now that's fully gone.

Well in programming it's very important to keep track of all changes happening in any file, AND be able to revert back to those early edits at any time you want.

Basically that's where git and github come in, github is a website that was made around Git, where you create a new project (like an empty folder in windows), and then you can push updates to that github project from your PC (as you update your codebase), and in github you can see history of all the times you pushed new updates, and you can revert back to old changes if you want to. Very, very useful way to save all our progress for coding projects.

You don't have to know much about this, just few basic commands which we will soon get to.

First install [Git](https://git-scm.com), for your Windows or Mac.

In Vscode terminal, you can type

```bash
git --version
```
to check if git is installed, if it is, you'll see a version be shown as a result of that terminal command.

That's it for now.

## Github

As i already said above, github is made around Git software that helps us keep track of any updates to our coding files.

Go sign up for a [Github](https://github.com) account.

You can go to your github profile, click on `Repositories` (projects) tab and click `Create new` button to create a new repository (project), give it any name, this is just for teaching you the principals of using github.

Now, since we installed vscode already, click in vscode to `Terminal > New terminal`, which is just a place we can type some commands that will execute them in your local PC, for windows choose Powershell terminal, in Mac `zsh` is a good one.

Now, go back to your github repository page you just made, and either copy the link they give you in the middle of the page or to the actual URL in the browser just add `.git` at the end of the URL, ie. `https://github.com/user/my-repository.git`, go back to the terminal in vs code, enter with `cd` command folder where you want to copy project from github to and in terminal type

```bash
git clone https://github.com/user/my-repository.git
```

That's it now you can type `ls` command in terminal which will show you list of all files and folders in current folder in terminal you are in, and you should see that new folder named `my-repository` you just cloned (copied) from github with that command. You can now enter that folder from terminal `cd my-repository`.

### Setup git locally

Only the first time git will tell you that you have to write 2 commands in Vscode terminal.

```bash
git config --global user.email "my-email@gmail.com" // Basically write your email in quotes, one you are using for your github account
git config --global user.name "John Doe" // Your name / full name whatever
```

### Connect Vscode to your github

1. In bottom left corner 2nd icon from the top (account icon) in vscode, click it.
2. Click turn on setting sync.
3. Click Turn on.
4. In the popup top click Sign in & Turn on.
5. Click sign in with Github.
6. In browser popup click authorize, and then Authorize github, whatever green button says.
7. In the popup click "Open Vscode" or whatever it says.
8. Now in Vscode you should be connected to your github account.

If this doesn't work, which for some people it does instantly, for some it get's buggy, just close Vscode, and repeat same steps, until it works. What can i say, it is what it is.

### Pushing project updates to github

Any time you add new files, folders, update some code files in your project, you'll type 3 commands in vscode terminal (only once you through terminal enter the folder of your github project) to push those updates to your github project page.

```bash
git add . // Adds all updated files to be ready for pushing to github
git commit -m "Some message describing what you are pushing as an update for other developers to see"
git push
```

That's pretty much it. From now on create a new project in github, clone it through vscode terminal locally to your PC, then add that folder to sidebar in your vscode, make some code, and then with above commands push those code updates to your github project, and then you share that github project link with other people if you wanna share it with them, or your clients if it's a private project.
