// This is the notes section of Introduction to Document Object Model

/* If you recall from css that we can input the styles through inline internal and external css.
--Similarlly with Javascript we can do the same thing.
Example inline js is done by putting it inside the html tag.
--We use an attribute called onload and what this does is that when we open a website,
  anything written inside that attribute (being javascript) will load it up
  <body onload = "alert('Hello There')">
-- If you are using inline Javascript make sure to use single qoutes especially when using alert and prompt due to the fact
   that it also uses double quotes.
-- The sad thing about inline javascript is that it hard to decode and may cause bugs.
--Internal Javascript can be done by using the script keyword.
--Anything found inside it has to be javascript code.
--The script tag can be used as well to input external file (js). 
--We just use a src attribute that can use the file that is in a different location.
--The position of the script tag matters a whole lot(similar to css.)
 */

//The proper intro to DOM

/*-- The HTML is a document.
-- When opening the file using the console, we will be able to see the same thing we see from the text editor.
//Inside console type in document to show the code of the document.
//type document.firstElementChild; in order for us to get the whole HTML code (including the head tag)
--In documents there are properties and methods
//Properties being : firstchild,innerHTML and style (the dots . are used)
//Methods being: click(), appendChild() and setAttribute()
--The difference being methods have parenthesis() and properties having fullstops in between. 
//Selecting HTML elements by using Javascript

--.getElementsbByTagName("li")-: What this does is that it finds all the tags with the name found inside the brackets
   and brings them out and all the attributes found inside these tags.
-- Remember that we cannot use that code to be able to style the content because it gives us back an array.
-- So in order for us to do that we use square brackets after the round brackets and select the index we want to change
   i.e 2 (third property). That way it changes the context for that specific item.

--.getElementsByClassName()-: quite clear really. This finds the elements with a specific class name given inside the brackets.
--.getElementsById()-: We can change the contents of that id by saying innerHTML = "Whatever."
--.getQuerySelector("li a") This is known as hierarchy where we are asking for two items in a different area
-- to comibine elements we say li.item (because its a class
  )
*/