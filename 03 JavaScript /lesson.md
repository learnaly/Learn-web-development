
# JavaScript

## About

This file is just a small transcript of what is covered in the youtube video for this lesson, in a more summarized way.

## Sections:

## What is JavaScript?

JavaScript is a programming language for the browser and server.

Previously we learned some HTML and CSS, but HTML just defines the structure, where as CSS only adds styles to HTML, but then how when i go to facebook and click a login button i get logged in and on to the home page you ask?

Good question! Well that's where JavaScript comes in, it adds dynamicness to your otherwise static (only nice lookin) HTML and CSS.

Meaning we can attach a click event listener on a button, and whenever you click it, we do something, ie. get your login details, and redirect you to the home page. It's really not hard, just few things you have to know, and it easily goes from there. :)

## Adding JS (JavaScript) to HTML

1. Adding an entire JS file

```html
<!DOCTYPE html>
<html>

  <head>

    <script src='main.js'></script>

  </head>

  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>

</html>
```

2. Writting JS directly in HTML

```html
<!DOCTYPE html>
<html>

  <head>

    <script>
      console.log("I'm javascript written directly inside HTML head element");
    </script>

  </head>

  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>

</html>
```

## **Syntax**

## About

JavaScript is written in files ending with **.js**.

Those files are added to HTML, usually inside of the `<head></head>` element, and if you remember we put inside head element things we don't see in the page in raw terms, that's why it goes there.

## Where to write JavaScript

1. JS files, a bit later we'll of course write JavaScript in **.js** files and add them to our HTML.
2. Browser console, for now, you can right click in your Chrome (any page), and click **inspect element**, you'll see a console popup from the bottom most likely. There at the top click on console tab, and now there is where we can easily type some javascript, and try it out.

![Chrome console](https://miro.medium.com/max/4172/1*U4HyRNGZLjGSx1fNMMK87g.png)

Console is just a window where we type some commands and they get executed, that's pretty much it, this one is browser's console, that executes JavaScript on the current page you are in, in that context. But windows, mac os, etc. they all have their own consoles as well, system consoles per say, same principal.

## Logging

Very easy minor thing to note first is console logging.

Open the console and type:

```js
  console.log('My first javascript code, yay!');
```

And press enter, nice, you are now officially a <span style='color: green; font-weight: bold'>programmer</span>. :)

Logging is very useful so we can track our code execution, as code is executed line by line, so if we wanna check if our code is working well we can console.log at certain lines to check if it's all good so far, so super useful for debugging our code.

## Types

### Simple

In JavaScript you have few types of values.

1. **String** - Any character, word or sentence, it's always quoted with ' or " or `;

```js
  'This is a string' or "a" or "My name's Lazar" // Note that name's uses single quote, outside quotes have to be different, if you are also using a quote inside the string
```

2. **Number** - Any number being a whole or with decimal point. It's written as a normal number, only strings use quotes.

```js
  25 or 31,4 or 74.5 or -25 or -14,5
```

3. **Boolean** - This is simple yes and no, true or false, it is or it's not value. Written as true or false.

```js
  true or false
```

4. **undefined, null** - These are values you'll use less, but will see in the code, null is basically if you are saying that something has no value, undefined is similar but more as like value doesn't exist.

```js
  undefined
  null
```
### Referenced, complex

1. **object** - It's group of **key: value** pairs. We usually use objects to group some amount of information, in one bucket per say which is that object. You write it with openning and closing curly brackets, and key: values inside.

```js
  {
    property: 'value'
  }

  or

  {
    name: 'John',
    age: 24,
    male: true,
    height: 2
    'Relationship status': null // *face palm*
  }
```

As you can see keys can only be strings, if it's one word it doesn't require quotes, but if there are spaces you have to put quotes around the key (or property as it's called). Value can be any javascript value: string, number, boolean, undefined, null, another object, array, etc.

2. **Arrays** - It's just a list of items. You write it with openning and closing angle brackets, where each item is separated with a comma ','. Array item can be any value: string, number, boolean, undefined, null, object, another array, etc.

```js
  [1, 2, 3]

  or

  [{ name: 'John', age: 24}, 17, 'String', true, undefined, null, [1, 2, 3]]
```

3. **JSON** (JavaScript Object Notation) - JSON is basically Array, or Object, where each property in the object has to be wrapped in double quotes. In order for servers that are built using different programming languages to share data between them, ie. Node.js server making a request and sending some data to server made in Java, standard was made called JSON, so there's at least 1 agreed way between different languages how to send some type of data, while sending http requests. Just keep this in mind, nothing special, but we'll mention it down the road, and you'll see it in action.

```js
  {
    "name": "John",
    "school": {
      "name": "Asd asd",
      "grades": [1, "2", true, null]
    }
  }
```

## Variables

Variables are just containers for storing some data, that you then use / reuse in multiple places in the code.

### const

You declare a variable with **const** if value of that variable is never gonna change.

```js
  const age = 24;

  age = 25 // Doesn't work

  age; // 24
```

### let

You declare a variable with **let** if value of that variable will change at some point in code.

```js
  let age = 24;

  age = 25; // Works
  age = 37; // Works

  age; // 37
```

#### Example

```js
  const num_1 = 14;
  const num_2 = 16;

  const result = num_1 + num_2;

  result; // 30
```

## Functions

Functions (methods) is just a block of code that gets executed once you call the function, that's it.

1. You declare it in two ways either with **function** key word or arrow function **const some_variable = () => { }** stored within a variable.
2. Functions take arguments in brackets, 0 or many.
3. They can optionally return an output, or just do something in the code, and return nothing.

```js
  function sum(num_1, num_2) {
    return num_1 + num_2;
  }

  or

  const sum = (num_1, num_2) => {
    return num_1 + num_2;
  };

  sum(3, 4); // Returns 7
```

Functions are useful, because they are reusable blocks of code that do something, so you don't need to repeat same code milion times, you just write it in a function, and then just call that function whenever you need it.

## Conditionals

Conditionals are used to do some stuff based on a condition.

Basically if my hair is blue, then change the color, otherwise just cut a bit of the hair.

All of these things, don't try to memoraize or get overwhelmed, just try to think in normal real life terms, and there's a way to do that in the code, that's why i am describing it in real life exaples like above.

Conditionals are writen using **if, else** key words.

```js
  const person = {
    name: 'John',
    age: 16,
    hair: 'blue
  };

  if (person.age > 16) {
    // Drive
  }
  else if (person.age === 16) {
    // Learn to drive
  }
  else {
    // Wait until you are 16
  }
```

So basically you are just executing different blocks of code, denepding on a condition.

Few more, minor notes, logical operators.

```js
  && - AND
  || - OR
  === - EQUALS

  const person = {
    name: 'John',
    age: 16,
    hair: 'blue
  };

 if (person.hair === 'brown' && person.age >= 16) {
   // die hair
 }
 else if (person.hair === 'blue' || person.age > 20) {
   // cut hair
 }
```

Above we are just saying if hair is brown AND age is larger or equal to 16, he can die his hair.
Else if his hair is blue OR he is older than 20 years old, he do whatever he wants, in this case cut his hair.

So as you see you can just talk about it like real life, and just use those logical operators to convey what you want to do.

## Loops

Loops are used for arrays (lists) mostly do go through the list, and do something with each element.

Say we have a list of numbers, and we wanna console.log each number with adding 2 to each one.

There's multiple loops, here we'll cover 2, and few more a bit later.

### For of

Just goes through each element in the list.

```js
  const list_of_numbers = [1, 2, 3];

  for (const number of list_of_numbers) {
    console.log(number + 2);
  }

  // Result:
  // 3
  // 4
  // 5
```

### While

Runs as long as statement in while block is true, stops running if statement returns false in the beginning of next loop.

```js
  let number = 1;

  while (number <= 3) {
    console.log(i);

    number++; // Increments number variable by 1
  }

  // Result:
  // 1
  // 2
  // 3
```

## Classes

Classes serve in a way similar purpose as objects, in terms that they group some amount of data and methods under same roof.

Each class is like a template of something, which you can instantiate, and create multiple instances of it, each instance following same template, but with its own data.

```js
class Person {
  first_name;
  last_name;
  age;

  constructor(first_name, last_name, age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }

  fullName() {
    return `${this.first_name} ${this.last_name}`;
  }
}

const john = new Person('John', 'Doe', 24);

john.fullName(); // Returns: John Doe
```

1. So as you see class is a template of a person for example, and we create an instance of it using **new** key word and calling class name with brackets.
2. To pass some arguments to the class, inside you use constructor method.
3. Each class can have **variables** and **methods**.
- Variables here are first_name, last_name and age, and you access them using **this** key word.
- Methods are same as functions, just in class no need to use **function** key word for defining the method.

## Array methods

As you see a class above, it has some methods inside, that do something with data inside the class, in the same manner Arrays (lists) are also classes of sorts, so arrays have some very usefull methods that you can use on them, and will use very often in the code. Here's few of them:

### Push

Push adds an element to the end of the array.

```js
  const list1 = [1, 2, 3];

  list1.push('John');

  list1; // [1, 2, 3, 'John'];
```

### Pop

Pop removes last element of the array;

```js
  const list1 = [1, 2, 3];

  list1.pop();

  list1; // [1, 2];
```

### Map

Map is a method you call on the array, where it loops through all items in the array, but you can transform each item.

```js
  const list1 = [1, 2, 3];

  const list2 = list1.map(number => number + 1);

  list2; // [2, 3, 4];
```

### Filter

Filter is a method you call on the array, where it loops through all items in the array, and only returns new array with items that passed the condition as true;

```js
  const list1 = [1, 2, 3];

  const list2 = list1.filter(number => number >= 2);

  list2; // [2, 3];
```

## DOM

DOM (Document Object Model) is really what you see when you open an HTML page. It's just a tree of all HTML elements in a page.

You can see it by openning browser console, and clicking on elements (first tab).

Now in JavaScript it controls everything it possibly can in the browser, it can do all things above, but also you can create in JavaScript new HTML elements, add content to them, add CSS to them in JavaScript, attach them to the DOM, or select some HTML elements, and then do something with them, change their CSS from JavaScript, and many more interesting things.

Of course you need to know none of this now, this is just so you are aware that's possible with JavaScript, and once a use case comes that needs that stuff, you can easily google what to type for it in JavaScript. :)

But, here are just 3 helpful methods to fetch some HTML elements and add some CSS to them.

### document.getElementById

Returns 1 element only.

As we spoke in CSS tutorial, HTML ID attribute means there's only 1 unique element with same ID value.

Hence why this method even if there's multiple elements with same ID value, it returns only 1, the first one it finds in the DOM.

```js
  const element = document.getElementById('sebastian');

  element.style.color = 'orange';
```

### document.getElementsByClassName

Returns array (list) of elements.

As we spoke in CSS tutorial, HTML class attribute means there can be one or many elements with same class name.

Hence why this method returns all HTML elements that have that class name in the DOM, in the current HTML page.

```js
  const elements = document.getElementsByClassName('cat');

  for (const element of elements) {
    element.style.color = 'orange';
  }
```

## ADVICE

1. DO NOT memorize any details about any of this stuff, just try to understand that these are just tools, and try to be aware of what these tools can do. And once you come to need something from that tool, just google it, and you'll learn it over time.
2. As i said above, just logically type for stuff you need, ie. you have to remove some letters from a string, just type, **remove letters from string javascript**, it's that simple, try it, test it, that's it. :)

## Example JavaScript

You can find small JavaScript code example in this (same) folder **main.js**.

You can copy this main.js file contents in your Chrome browser console, to see it in action.

# Task

View your task in **Task** folder in this folder.

## References:

1. [w3school JavaScript](https://www.w3schools.com/js) - I always encourage people to go to this website, and just casually go through their quick tutorial, where they cover in simple terms all the topics in more details.
1. [Array methods](https://www.w3schools.com/js/js_array_methods.asp)
