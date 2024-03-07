/*
**************************************
TITLE: Lab 1 - Event Registration Form
AUTHOR: R Kelly Kuhn (RKK)
CREATE DATE: 12 Feb 2024
PURPOSE: This code represents an HTML page with a theme of "Event Registration."
         The JavaScript file includes Manipulating the DOM related
         to event Menu Page, adhering to the specified Lab 2 requirements.
LAST MODIFIED ON:  (RKK)
LAST MODIFIED BY: (RKK)
MODIFICATION HISTORY:
16 Feb 2024 - Created file and added displayPopup function. Started tweeking the pop
              menu to allow multi checks and the popup does not appear until the
              submit button is clicked. (RKK)
17 Feb 2024 - Adding criteria for Lab 2 to the code. Started all Lab 2 required compont comments. (RKK)
**************************************
*/

function displayAllSelectedItems() {
    var selectedItems = [];
    var numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);

    // Find all checked checkboxes across the document
    var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedCheckboxes.forEach(function(checkedCheckbox) {
        // For each checked checkbox, get the item description and cost
        var itemText = checkedCheckbox.parentElement.innerText;
        var costText = checkedCheckbox.parentElement.nextElementSibling.innerText;
        selectedItems.push(itemText + " - " + costText);

        // Remove the corresponding section from the popup box
        var sectionToRemove = checkedCheckbox.closest('.menu-section');
        sectionToRemove.remove();
    });

    // Display a popup with all selected items, if any, and the number of people message
//13. Add a page element with content to the page through a popup message.
//14. Select a page element based on its ID or class value. This is done through three different popup messages.
//15. Changed the value of the ID or class through the popup message. There are three of them
    var message = "";
    if (selectedItems.length > 0) {
        message += "Selected Items:\n" + selectedItems.join("\n") + "\n\n";
    } else {
        message += "No items selected.\n\n";
    }

    // Check the number of people and add appropriate message
    if (numberOfPeople < 10) {
        message += "Your party is under 10 people, we will not be able to assist you.";
    } else if (numberOfPeople > 300) {
        message += "Your party is over 300 people, we will not be able to assist you.";
    } else if (numberOfPeople >= 10 && numberOfPeople <= 300) {
        message += "Your party is within 10 to 300 people, we will be able to work with your group.";
    }

    // Display the message in a popup
    alert(message);

    // Clear the value in the numberOfPeople input field
    document.getElementById("numberOfPeople").value = "";
}

