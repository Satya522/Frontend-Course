[![GitHub](https://img.shields.io/badge/GitHub-Satya522-black?logo=github)](https://github.com/Satya522)

# Full Course on HTML

## Introduction to HTML
HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using markup.

## Table of Contents
1. [Basic HTML Structure](#basic-html-structure)
2. [HTML Elements](#html-elements)
3. [HTML Attributes](#html-attributes)
4. [HTML Headings](#html-headings)
5. [HTML Paragraphs](#html-paragraphs)
6. [HTML Links](#html-links)
7. [HTML Images](#html-images)
8. [HTML Lists](#html-lists)
9. [HTML Tables](#html-tables)
10. [HTML Forms](#html-forms)
11. [HTML Semantic Elements](#html-semantic-elements)
12. [HTML Multimedia](#html-multimedia)
13. [HTML APIs](#html-apis)
14. [HTML Best Practices](#html-best-practices)


## Basic HTML Structure

Every HTML document has a basic structure that includes several essential elements. Here is a detailed explanation of each element and its purpose:

### Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>

## Explanation of Each Element

### `<!DOCTYPE html>`

- **Purpose**: This declaration defines the document type and version of HTML. It ensures that the browser renders the page in standards mode.
- **Usage**: Always include `<!DOCTYPE html>` at the beginning of your HTML documents to avoid quirks mode, which can cause inconsistent rendering across different browsers.

### `<html lang="en">`

- **Purpose**: The `<html>` element is the root element of an HTML document. The `lang` attribute specifies the language of the document's content.
- **Usage**: The `lang="en"` attribute indicates that the content is in English. This helps search engines and browsers understand the language of the page for accessibility and SEO purposes.

### `<head>`

- **Purpose**: The `<head>` element contains meta-information about the document, such as its title, character set, and links to stylesheets and scripts.
- **Usage**: The content inside the `<head>` element is not displayed on the page but is essential for the document's metadata and external resources.

### `<meta charset="UTF-8">`

- **Purpose**: The `<meta>` element with the `charset` attribute specifies the character encoding for the document.
- **Usage**: `charset="UTF-8"` ensures that the document can handle a wide range of characters, including special symbols and non-Latin alphabets. UTF-8 is the most widely used character encoding.

### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

- **Purpose**: This `<meta>` element provides instructions to the browser on how to control the page's dimensions and scaling.
- **Usage**: `content="width=device-width, initial-scale=1.0"` ensures that the page is responsive and scales correctly on different devices, especially mobile devices.

### `<title>Document</title>`

- **Purpose**: The `<title>` element sets the title of the document, which is displayed in the browser's title bar or tab.
- **Usage**: The content inside the `<title>` element should be concise and descriptive, as it is also used by search engines as the title of the search result.

### `<body>`

- **Purpose**: The `<body>` element contains the content of the HTML document that is displayed in the browser.
- **Usage**: All visible content, such as text, images, links, and other elements, should be placed inside the `<body>` element.

### `<h1>Hello, World!</h1>`

- **Purpose**: The `<h1>` element represents a top-level heading. It is used to define the most important heading on the page.
- **Usage**: The content inside the `<h1>` element should be a brief and descriptive title for the page or section. It helps with SEO and accessibility by providing a clear structure to the document.

### Summary

The basic HTML structure includes the `<!DOCTYPE html>` declaration, the root `<html>` element with a language attribute, the `<head>` element containing meta-information, and the `<body>` element containing the visible content. Each element serves a specific purpose to ensure that the document is well-structured, accessible, and properly rendered by browsers.

By understanding and using these elements correctly, you can create well-formed HTML documents that are compatible with different browsers and devices.


## HTML Elements

HTML elements are the building blocks of an HTML document. They define the structure and content of a web page. Here are some commonly used HTML elements:

1. `<h1>` to `<h6>`: Headings of different levels, with `<h1>` being the highest and `<h6>` being the lowest.

2. `<p>`: Paragraphs of text.

3. `<a>`: Links to other web pages or resources.

4. `<img>`: Images to be displayed on the page.

5. `<ul>` and `<ol>`: Unordered and ordered lists, respectively.

6. `<li>`: List items within a list.

7. `<div>`: A container that groups other elements together.

8. `<span>`: An inline container used for styling or targeting specific parts of text.

9. `<table>`: A table with rows and columns.

10. `<form>`: A form for user input.

These are just a few examples of HTML elements. There are many more available for different purposes. Understanding and using these elements correctly is essential for creating well-structured and functional web pages.

## Example of HTML Element

Let's take the `<a>` element as an example. The `<a>` element is used to create hyperlinks in HTML. Here's an example of how it can be used:

```html
<a href="https://www.example.com">Visit Example Website</a>
```

In this example, the `<a>` element is used to create a hyperlink that points to the URL "https://www.example.com". The text "Visit Example Website" is the visible content of the link.

By using the `<a>` element and specifying the `href` attribute with the desired URL, you can create clickable links that navigate users to other web pages or resources.

Remember to replace "https://www.example.com" with the actual URL you want to link to in your HTML code.

## HTML Attributes

HTML attributes provide additional information about HTML elements. They are used to modify the behavior or appearance of elements, or to provide additional metadata. Here are some commonly used HTML attributes:

1. `class`: Specifies one or more class names for an element, allowing you to apply CSS styles or JavaScript functionality to specific elements.

2. `id`: Specifies a unique identifier for an element, which can be used to target and manipulate the element with CSS or JavaScript.

3. `src`: Specifies the source URL of an external resource, such as an image or a script.

4. `href`: Specifies the destination URL of a hyperlink.

5. `alt`: Specifies alternative text for an image, which is displayed if the image cannot be loaded.

6. `width` and `height`: Specifies the width and height of an element, such as an image or a table cell.

7. `disabled`: Disables an input element or a button, preventing user interaction.

8. `placeholder`: Specifies a short hint that describes the expected value of an input field.

9. `required`: Specifies that an input field must be filled out before submitting a form.

10. `target`: Specifies where to open the linked document when a hyperlink is clicked, such as in a new tab or window.

These are just a few examples of HTML attributes. There are many more available for different elements and purposes. Understanding and using these attributes correctly can enhance the functionality and usability of your web pages.

Example of HTML Attribute

Let's take the `class` attribute as an example. The `class` attribute is used to assign one or more class names to an element. Here's an example of how it can be used:

```html
<p class="highlight">This paragraph has a custom style applied.</p>
```

In this example, the `class` attribute is used to assign the class name "highlight" to the `<p>` element. You can then define CSS styles for the "highlight" class in your CSS file or inline styles.

By using the `class` attribute and defining corresponding styles, you can customize the appearance of specific elements on your web page.

Remember to replace "highlight" with the desired class name in your HTML code.


## HTML Headings

HTML headings are used to define the structure and hierarchy of the content on a web page. They range from `<h1>` to `<h6>`, with `<h1>` being the highest level and `<h6>` being the lowest.

Here's an example of how headings can be used:

```html
<h1>This is a Heading Level 1</h1>
<h2>This is a Heading Level 2</h2>
<h3>This is a Heading Level 3</h3>
<h4>This is a Heading Level 4</h4>
<h5>This is a Heading Level 5</h5>
<h6>This is a Heading Level 6</h6>
```

In this example, each heading element represents a different level of importance. The text inside the heading tags will be displayed with different font sizes and styles, reflecting the hierarchy of the content.

By using headings appropriately, you can create well-structured and accessible web pages that are easy to navigate and understand.

Remember to choose the appropriate heading level based on the importance and hierarchy of your content.



HTML Links
Links are defined with the <a> tag. The href attribute specifies the URL of the page the link goes to.

Example of an HTML Link


<a href="https://www.example.com">This is a link</a>

HTML Images
Images are defined with the <img> tag. The src attribute specifies the path to the image, and the alt attribute provides alternative text for the image.

Example of an HTML Image
<img src="image.jpg" alt="Description of image">

HTML Lists
HTML supports ordered lists (<ol>) and unordered lists (<ul>). List items are defined with the <li> tag.

Example of an Ordered List
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
Example of an Unordered List
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

HTML Tables
Tables are defined with the <table> tag. A table is divided into rows (<tr>), and each row is divided into cells (<td>). Table headers are defined with the <th> tag.

Example of an HTML Table
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>

HTML Forms
Forms are used to collect user input. The <form> element can contain various input elements like text fields, checkboxes, radio buttons, and submit buttons.

Example of an HTML Form

<form action="/submit-form" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>
HTML Semantic Elements
Semantic elements clearly describe their meaning in a human- and machine-readable way. Examples include <article>, <section>, <nav>, and <footer>.

Example of HTML Semantic Elements
<article>
    <h2>Article Title</h2>
    <p>This is an article.</p>
</article>
<section>
    <h2>Section Title</h2>
    <p>This is a section.</p>
</section>
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
    </ul>
</nav>
<footer>
    <p>Footer content goes here.</p>
</footer>



HTML Multimedia
HTML supports multimedia elements like <audio> and <video>.

Example of HTML Multimedia
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

HTML APIs
HTML5 introduced several APIs that can be used with JavaScript to enhance web pages, such as the Geolocation API, the Canvas API, and the Web Storage API.

Example of Using the Geolocation API

<button onclick="getLocation()">Get Location</button>
<p id="demo"></p>

<script>
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}
</script>



