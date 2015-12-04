// Aim: display the light box with the correct image when we click an image

// Step 1: Add a click event listener to our images inside of the sections.
$("section img").on("click", function(){
// Step 2: Fade in the lightbox over 250ms.
$("#lightbox").fadeIn(250);
// Step 3: Replace the image in the lightbox witht the image that has been clicked on.

// Store the src attribute of the image that has been clicked on
var imageSrc = $(this).attr("src");
// console.log is a test of the variable - remove when uploading the final site.
console.log(imageSrc);
// Replace the lightbox image source with the image source we've stored in the variable.
$("#lightbox img").attr("src", imageSrc);

});

// Step 4: Add a click event listener to the lightbox.
$("#lightbox").on("click", function(){

// Step 5: Fade out the lightbox.
$("#lightbox").fadeOut(250);
});


//Aim: Change the background colour of the body as we scroll down the page.

// Step 1: Create a scroll event listener and attach it to the whole document (page).
// This monitors scroll events on the page, and triggers the function every time a user scrolls.
$(document).on("scroll", function(){
// Step 2: Store the number of pixels from the top of the page (this happens every time we scroll).
// We use the scrollTop action, this returns the vertical position of the scroll bar in pixels.
var pixelsFromTop = $(document).scrollTop();
console.log(pixelsFromTop);
// Step 3: Change the background colour according to how far from the top of the page we currently are.
  // if (thisIsTrue) {
  //do something
  // } else {
  // it's not true, do something else
  // }
if (pixelsFromTop > 50) {
  // turn the body background colour to blue.
  // .addClass action allows us to add classes to elements in our html. Here we add the blue class from our CSS - note we don't need the full stop here as it is only expecting a class name.
  $("body").addClass("blue");
} else {
  // Turn the background back to white by removing the blue class.
  $("body").removeClass("blue");
}

// Step 4: .toggleClass is an alternative to the long way above. It does the same thing but quicker. It has the following Syntax (structure of the sentence in code):
// $("element").toggleClass("className", state);
// The state is the value that needs to be evaluated as either true or false.

$("body").toggleClass("rose", pixelsFromTop > 1230);

$("body").toggleClass("cubism", pixelsFromTop > 2524);


});
