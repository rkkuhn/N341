/*
**************************************
TITLE: Lab 4 - Main Page
AUTHOR: R Kelly Kuhn (RKK)
CREATE DATE: 20 March 2024
PURPOSE: The code repesents the CSS layout for the main page of Lab 3.
LAST MODIFIED ON: 4 April 2024
LAST MODIFIED BY: (RKK)
MODIFICATION HISTORY:
20 March 2024 - Created the basic css layout of this lab. (RKK)
26 March 2024 - Deleted everything I created to start over with a better plan
                for this assignment. I am going to setup different menus for
                customer names, image to manuplate, and new css style. (RKK)
30 March 2024 - Added buttons for image - double click me, hide, show, Toggle
                fade-in, fade-out, and fade-toggle. (RKK)
2 April 2024 - Added the slide up, slide down, slide toggle, and stop buttons.
                Also added a button to call a function to change the color of
                the text. (RKK)
4-April 2024 - Added comments to every line of code. (RKK)

**************************************
*/



$("document").ready(function(){ // Wait for the document to be fully loaded before executing the following functions
    $("button").dblclick(function(){ // Double click event listener on all buttons
        $("#img1").css('width','500px'); // Change the width of the image with id "img1" to 500 pixels
    });
});

$("document").ready(function(){ // Another function to be executed when the document is fully loaded

    $("#img1").mouseenter(function(){ // Mouse enter event listener on the image with id "img1"
        $("#img1").css('width', '800px'); // Change the width of the image to 800 pixels when mouse enters
    });

    $("#img1").mouseleave(function(){ // Mouse leave event listener on the image with id "img1"
        $("#img1").css('width', '250px'); // Change the width of the image back to 250 pixels when mouse leaves
    }); 

});

$("document").ready(function(){ // Another function to be executed when the document is fully loaded
    $("#btn1").click(function(){ // Click event listener on the button with id "btn1"
        $("#img1").hide(3000); // Hide the image with id "img1" over 3000 milliseconds (3 seconds)
    })

    $("#btn2").click(function(){ // Click event listener on the button with id "btn2"
        $("#img1").show(3000); // Show the image with id "img1" over 3000 milliseconds (3 seconds)
    })

    $("#btn3").click(function(){ // Click event listener on the button with id "btn3"
        $("#img1").toggle(4000); // Toggle the visibility of the image with id "img1" over 4000 milliseconds (4 seconds)
    })

    $("#btn4").click(function(){ // Click event listener on the button with id "btn4"
        $("#img1").fadeIn(3000); // Fade in the image with id "img1" over 3000 milliseconds (3 seconds)
    })

    $("#btn5").click(function(){ // Click event listener on the button with id "btn5"
        $("#img1").fadeOut(3000); // Fade out the image with id "img1" over 3000 milliseconds (3 seconds)
    })

    $("#btn6").click(function(){ // Click event listener on the button with id "btn6"
        $("#img1").fadeToggle(5000); // Toggle fading of the image with id "img1" over 5000 milliseconds (5 seconds)
    }) 

    $("#btn7").click(function(){ // Click event listener on the button with id "btn7"
        $("#img1").slideUp(4000); // Slide up the image with id "img1" over 4000 milliseconds (4 seconds)
    })

    $("#btn8").click(function(){ // Click event listener on the button with id "btn8"
        $("#img1").slideDown(4000); // Slide down the image with id "img1" over 4000 milliseconds (4 seconds)
    })

    $("#btn9").click(function(){ // Click event listener on the button with id "btn9"
        $("#img1").slideToggle(4000); // Toggle sliding of the image with id "img1" over 4000 milliseconds (4 seconds)
    })
});

function func2() // Defining a function named func2
{
    $("div").css('background-color', 'lightblue'); // Change background color of all div elements to lightblue

    // ID Selector
    $("#p1").css('font-style', 'italic'); // Change font style to italic for the element with id "p1"
    // Class Selector
    $(".para").css('font-style', 'italic'); // Change font style to italic for elements with class "para"

    $("li").css('font-weight', 'bold'); // Change font weight to bold for all list items

    $("li").css('color', 'red'); // Change text color to red for all list items

    $("div > p").fadeToggle(3000); // Toggle fading of paragraphs inside divs over 3000 milliseconds (3 seconds)

    $("p:first").fadeToggle(); // Toggle fading of the first paragraph
}
