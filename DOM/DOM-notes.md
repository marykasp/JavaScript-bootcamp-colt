**DOM** - Document Object Model, connect JS with HTML and CSS, window into HTML and CSS
- DOM is a bunch of objects that you can interact with via JS
- Document *object* is the entry point into the world of the DOM - contains representations of all the content on a page, plus tons of useful methods and properties. Document is on every webpage and is the root of the tree, can access rest of content of website from the document object
- all contents of page are objects that are nested underneath the **Document object**
  - methods and properties on the Document object
  - methods and properties that are attached to content objects
- load up a webpage, the DOM is created, all stored in the Document object
  - document.all property lists all the elements on the page- each element is itself an object

*Selecting* an element, then perform a task on that element- manipulate that element

- *HTMLCollection*: array like object that is not actually an array, HTML collection of objects
  - array methods do NOT work on this HTMLCollection, can access invidiual elements using index position bracket notation
  - length property does work on HTMLCollections
  - lightweight structure that stores elements
  - can iterate over them using for...of loop
  - can use spread operator

- select elements by: ID, tag name, and class name
  - getElementById: returns only one element
  - getElementsByTagName: returns a collection of elements
  - getElementsByClassName: returns a collection of elements

- **querySelector** - newer all in one method to select a single element, pass in CSS selector
 - can pass it a tag name or a class or id name using . or #
 - document.querySelectorAll will return all the matching elements in a *NodeList*

*Manuipulting* elements
- changing the text of elements
- **innerText** - returns the inner text of an element, all of the text inside of it including all text of nested elements
- **textContent** - includes all the text including spaces and text from a script tag
- changing the HTML
- **innerHTML** returns the any inner HTML tags nested inside the element, including the content

Altering styles - can use **style** property only if style was assigned inline and not in a separate file

Retrieve current style value using **getComputedStyle**
