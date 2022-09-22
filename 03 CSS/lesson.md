# CSS

## About

This file is just a small transcript of what is covered in the youtube video for this lesson, in a more summarized way.

## Sections:

## What is CSS?

CSS (Cascading Style Sheets) is a style language for HTML.

In previous lesson we went over HTML, BUT, when you saw it in the browser it's just basic text, images, one below each other, right, it has no style whatsoever.

So basically, that's what CSS is for, selecting an HTML element, and addying some styles to it, colors, font size, width, height, etc. That's pretty much it. :)

## Syntax

CSS natively is written in files ending with **.css**.

Those files are added to HTML, usually inside of the `<head></head>` element, and if you remember we put inside head element things we don't see in the page in raw terms, that's why it goes there.

CSS has it's own very simple syntax:

![CSS](https://chiamakaikeanyi.dev/static/820b122e7aa223b15c7e8e78a417a9b4/7b604/css-selectors.png)

So you have:

1. Selector, esentially we are saying i wanna SELECT some HTML element/s and add style to them (ie. background-color: yellow).
2. Then we open currly bracket and add styles in format of **key: value** pairs.

That's pretty much the gist of it, you just select something in your HTML and add some styles.

## HTML terms

### Hierarchy

![HTML heirarchy](https://www.kirupa.com/html5/images/parents_siblings_children_200a.png)

So only thing above image says is:
1. Parent element is HTML element that wraps around some other elements, so logically it's those element's parent.
2. Elements inside that parent HTML element, are called children of that parent element.
3. Child elements amongst themeselves are called sibilings.

It's very logical terminology really. This is just small gist to have in mind for CSS selectors.

### Adding CSS to HTML

1. Adding an entire file

```html
<!DOCTYPE html>
<html>

  <head>

    <link rel='stylesheet' href='mystyle.css'>

  </head>

  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>

</html>
```

2. Writting CSS directly in HTML

```html
<!DOCTYPE html>
<html>

  <head>

    <style>
      body {
        background-color: green;
      }

      h1 {
        color: maroon;
        margin-left: 40px;
      }
    </style>

  </head>

  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>

</html>
```

3. Writting CSS inside an HTML element inline

```html
<!DOCTYPE html>
<html>

  <head>

  </head>

  <body>

    <h1
      style="color: orange; font-size: 13px"
    >
      This is a heading
    </h1>

    <p>This is a paragraph.</p>

  </body>

</html>
```

### Classes and IDs

One thing we didn't mention in HTML previously is that each HTML element can have some attributes on it.

![HTML Classes and IDs](https://codetheweb.blog/assets/img/posts/html-syntax/tag-structure-2.png)

Remeber that for example HTML link element or `<a href='https://google.com>Some link</a>` has a href attribute where you add a URL that element will link to, or `<img src='https://someimage.com'>` image element has a src attribute where you add URL of the image, well those attributes are very specific to those HTML elements, on the other hand, all HTML elements share **class** and **id** attributes.

1. Class: class is an attribute whose value is a string ie. **cat** and you can add class cat to ONE or MANY HTML elements in the same page.
2. ID: id on the other hand, value is also a string ie. **Sebastian**, BUT, difference is grammatically only one element in the page should have same ID value.

ie.
There are many cats (class), BUT, there's only one cat named Sebastian (ID).

## Selectors

Now going back to selectors, again, entire point of CSS is just **selecting** one (ID) or many (class) HTML elements, and appling some styles to them, it's that simple, not much more to it. :)

### Class selector

To select many elements with the same class, you would use a prefix **.** in front of class name:

```css
  .cat {
    background-color: yellow;
  }
```

### ID selector

To select one element specifically with a unique ID on the page, you would use a prefix **#** in front of ID name:

```css
  #sebastian {
    height: 30px;
  }
```

### All HTML elements of the same tag

To select all for example heading 1 elements, this would select all h1 elements in the page and set their font size to 50 pixels:

```css
  h1 {
    font-size: 50px;
  }
```

### Selectors more advanced

Of course this is just simple version, and most used for CSS, so more than enough for you to know now. :)

But, as you go along, you'll add to your CSS knowledge, and there's more ways to select things, BUT don't worry about these now, you might even never need them.

Some more advance examples:

1. All direct li children of the ul parent:

```css
  ul > li {
    margin-bottom: 15px;
  }
```

2. Any direct child element of ul parent:

```css
  ul > * {
    margin-bottom: 15px;
  }
```

2. Last li child:

```css
li:last-child {
  margin-bottom: 0;
}
```

You can google or see all ways to select HTML element/s on your own, for now above ones are enough for simple beginnings. :)

## Styles

I would say there's 3 major groups of styles, and each is not really hard at all, very simple, just way to remeber them easier.

### Visual styles

Visual styles is text color, background color, font size, font weight, is text bold, tilted (italic), does div have borders, what color, are corners rounded. \
Is a HTML div (container) full width, does it have a specific height, etc.

ie.

```css
  h1 {
    font-size: 50px;
    color: black;
    background-color: grey;
    text-transform: uppercase;
    font-weight: bold;
  }

  div {
    width: 100%;
    height: 400px;
  }
```

### Box styles

![Box model](https://codinglead.github.io/images/box-model.png)

1. Each element's content is of certain width and height naturally, depends how much there is text, or how large an image is for example, that's **content** part in the image above.
2. Then if you add a border to your element (**border** css property) that border line would be super close to text, and look probably very bad.
3. That's why you have padding (**padding** css property), padding adds space between content itself and border of that HTML element.
4. But if you had 2 for example div elements they would be right next to each other. To separate them you would add a margin (**margin** css property), margin basically adds spacing outside the HTML element itself to separate it or create space from other HTML elements around it.

### Layout styles

And finally layout styles, which basically is, when you see header bar on a website, and it has a logo and a button, but they are both in same row, and there's space between them, logo is left, and button all the way right.

Well, that's why we use layout styles for, we apply layout styles on a parent to organize its children. That's pretty much it. :)

ie.

```html
  <header class='main-header'>
    <img src='logo.jpg' />

    <button>Buy now</button>
  </header>
```

```css
  .main-header {
    display: flex; // You have to add this line, to let browser know that this parent will use flex (one of css styles for layout)
    flex-direction: row; // You are saying that children (img and button) should be in a row, not a column.
    justify-content: space-between; // You want them spaced from each other.
  }
```

[Flexbox Froggy online game to learn flex](https://flexboxfroggy.com)

![Flex css](https://i.imgur.com/bszVWTh.png)

## More advanced CSS

Not needed whatsoever now, but just as a reference if you are bored, and wanna use / learn it on your own. :)

1. Media queries - used for dynamically updating styles on the same element, depending on width of the browser, ie. some specific styles if you are using web page on mobile (less than 600px page width), anything above that (ipad and above (desktop)) some other styles.
2. Transform and transition
3. Animations

## Example CSS

You can find small CSS code example in this (same) folder `example.html` and `style.css`.

You can drag this file (example.html) into your Chrome (or whatever) browser, to see how it looks.

# Task

View your task in **Task** folder in this folder.

## References:

1. [w3school CSS](https://www.w3schools.com/css) - I always encourage people to go to this website, and just casually go through their quick tutorial, where they cover in simple terms all the topics in more details.
2. [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp) - All CSS selectors.
