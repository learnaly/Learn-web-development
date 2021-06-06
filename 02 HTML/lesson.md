# HTML

## About

This file is just a small transcript of what is covered in the youtube video for this lesson, in a more summarized way.

## Sections:

## What is HTML?

HTML (Hyper Text Markup Language) is one of the tools browsers use to display some information in some format on the screen (web page you are on).

HTML is literally just a raw construction, you saying to the browser this link as an image, this link as video, this text is a heading, this other block of text is a paragraph, and that's pretty much all of it. :)

## HTML a markup language

1. HTML is written in files ending in *.html*.
2. Usually root file (or file that browser displays in a root domain, ie. facebook.com), is *index.html*. Why is it named *index* you ask, i have no clue to this day, and i don't care, it is what it is, lets' move on. :D
3. Any other page ie. *website.com/about* you'd conventionally put in *about.html* file. But of course that's just raw HTML, which we will only mention here once, actual apps we'll build using some other tools, but this is some stuff you should just be aware of, know in the beginning.

## Syntax (what you write)

### Structure of HTML file

![HTML](https://qph.fs.quoracdn.net/main-qimg-71a5fc93c25a31907cf6456b862631e4)

This is roughly how it looks.

**Few main notes**:

1. Entire content of an HTML file is written using HTML elements.
2. HTML element is some content wrapped in HTML tags, ie. `<h1>Some content</h1>`;

![HTML element](https://cdo-curriculum.s3.amazonaws.com/media/uploads/html_element.png)

3. Tags are just you telling browser what the content is, there's few of them you'll most often use like:

```html
<h1>Heading</h1> // Heading: h1, h2, h3, h4, h5

<p>Paragraph</p> // Paragraph

<img src='https://someimagelink.com'> // Image

<div>Any HTML element/s</div> // Div (container element), takes full width of the row by default

<span>Some inline text wrapped in an element</span> // Inline text container

<a href='https://google.com'>Link</a> // Link inside of text usually

<form>... Form input elements ... </form> // Used for forms in the page

<input type='number'> // Input element for the form

<button>Button</button> // Button

<ul> // List
  <li>Item</li> // List item
  <li>Item</li>
  <li>Item</li>
</ul>

etc.
```

These are probably ones you'll most often use, and if there's an element you wanna use that you don't see here, you can always google all of the elements, and see which one you might need.

*Important note* you can just probably do 95% of things just using `<div>` element, maybe i am exaggerating, but my point is you can, BUT, you should try to use elements that are made for type of content you wanna write in HTML.

- If you have a title of a blog post, put it in `<h1>` (heading 1) element, as that's your page main heading text.
- For blog text (body) put it in the `<p>` (paragraph) element.

What i am trying to say is over time try to use elements which are grammatically correct for what you wanna do, BUT, DO NOT LEARN THIS IN ADVANCE, you can google all elements to know what exists, but of course you'll research specifics once you come to need them.

4. Now, back to HTML structure from image above. Entire HTML content (all elements) is wrapped in `<html>` HTML element (tag), again, it doesn't matter why, it's how it works, you don't need to know how tool is made, just what it does and how to use it atm. :)

5. Then main 2 elements as children of `<html>` element are `<head>` and `<body>`.

6. In `<head></head>` element we add only stuff that you'll never visually see on the page, but that's very useful, some meta information, you'll see later. Like title of the web page (text you see in browser tab).

7. In `<body></body>` element we add all the actual HTML content we wanna see in the page.

8. You can download [VScode](https://code.visualstudio.com) a program used for writting code, nothing special, but helps a lot to easily have overview of your folders, files, highlights the code nicely, etc.

## Example HTML

You can find small HTML code example in this (same) folder `example.html`.

You can drag this file into your Chrome (or whatever) browser, to see how it looks (aweful for now, but this is just structure (HTML), we'll style it in the next lesson :) ).

# Task

View your task in **Task** folder in this folder.

## Refrences

1. [w3school HTML](https://www.w3schools.com/html/default.asp) - I always encourage people to go to this website, and just casually go through their quick tutorial, where they cover in simple terms all the topics in more details.

2. [List of all elements](https://www.w3schools.com/tags/default.asp) - BUT please don't remember this in advance, even i am using 15% of those, some of them i've seen now for the first time. So we'll stick to few simple ones above. :)








