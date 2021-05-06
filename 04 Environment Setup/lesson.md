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