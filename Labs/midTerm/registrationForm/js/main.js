/*
**************************************
TITLE: Lab 1 - Event Registration Form
AUTHOR: R Kelly Kuhn (RKK)
CREATE DATE: 27 Jan 2024
PURPOSE: This code represents an HTML page with a theme of "Event Registration." 
         The JavaScript file includes variables, functions, and an object related 
         to event registration, adhering to the specified Lab 1 requirements. The
         theme has the ability to go from just a registation form. It will be easy
         to create steps with each lab to build a full Event Tracker.
LAST MODIFIED ON:  (RKK)
LAST MODIFIED BY: (RKK)
MODIFICATION HISTORY:
28 Jan 2024 - Not many changes required in this code. I ensured that the month, day
              and year was attached to the index.html page. (RKK)

************************************** -->
*/
// Define an array with preset numbers to represent the number of people.
const numberOfPeopleArray = [30, 40, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300];

// Select the dropdown element by its ID and populate it with options based on the numberOfPeopleArray.
var numberOfPeopleDropdown = document.getElementById('numberOfPeople');
numberOfPeopleArray.forEach(function (number) {
    var option = document.createElement('option'); // Create a new option element for each number.
    option.value = number; // Set the option value to the current number.
    option.text = number; // Set the option text to display the current number.
    numberOfPeopleDropdown.add(option); // Add the option to the dropdown menu.
});

// Define an array with the names of the months.
const monthNamesArray = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Nov.', 'Dec.'];

// Select the month dropdown element by its ID and populate it with options based on the monthNamesArray.
var monthDropdown = document.getElementById('eventMonth');
monthNamesArray.forEach(function (month, index) {
    var option = document.createElement('option'); // Create a new option element for each month.
    option.value = index + 1; // Set the option value to the month's index plus one (to account for month numbering starting at 1).
    option.text = month; // Set the option text to display the month name.
    monthDropdown.add(option); // Add the option to the dropdown menu.
});

// Select the day dropdown element by its ID and populate it with options for each day of the month (assumes all months have 31 days).
var dayDropdown = document.getElementById('eventDay');
for (let day = 1; day <= 31; day++) {
    var option = document.createElement('option'); // Create a new option element for each day.
    option.value = day; // Set the option value to the current day.
    option.text = day; // Set the option text to display the current day.
    dayDropdown.add(option); // Add the option to the dropdown menu.
}

// Select the year dropdown element by its ID and populate it with options for years from 2024 to 2030.
var yearDropdown = document.getElementById('eventYear');
for (let year = 2024; year <= 2030; year++) {
    var option = document.createElement('option'); // Create a new option element for each year.
    option.value = year; // Set the option value to the current year.
    option.text = year; // Set the option text to display the current year.
    yearDropdown.add(option); // Add the option to the dropdown menu.
}

// Add an event listener to the "Calculate Fee" button that executes a function when clicked.
document.getElementById('calculateFeeBtn').addEventListener('click', function () {
    // Retrieve the selected values for venue type and event type from the form.
    var venueType = document.getElementById('venueType').value;
    var eventType = document.getElementById('eventType').value;

    // Calculate the registration fee based on the selected venue and event types.
    var registrationFee = calculateRegistrationFee(venueType, eventType);

    // Output the selected venue type, event type, and calculated registration fee to the webpage.
    outputToPage('elVenueTypeOutput', 'Venue Type: ' + venueType);
    outputToPage('elEventTypeOutput', 'Event Type: ' + eventType);
    document.getElementById('calculateFeeBtn').style.display = 'none'; // Hide the "Calculate Fee" button after calculation.
    outputToPage('elRegistrationFeeOutput', 'Registration Fee: $' + registrationFee.toFixed(2));
});

// Define a function to calculate the registration fee based on venue type and event type.
function calculateRegistrationFee(venueType, eventType) {
    var baseFee = 0; // Initialize the base fee to 0.

    // Adjust the base fee based on the selected venue type.
    if (venueType === 'outdoor') {
        baseFee += 400; // Add $400 for outdoor venues.
    }
    if (venueType === 'indoor') {
        baseFee += 250; // Add $250 for indoor venues.
    }

    // Adjust the base fee based on the selected event type.
    if (eventType === 'corporate') {
        baseFee += 200; // Add $200 for corporate events.
    }
    if (eventType === 'wedding') {
        baseFee += 700; // Add $700 for weddings.
    }
    if (eventType === 'reception') {
        baseFee += 400; // Add $400 for receptions.
    }
    if (eventType === 'retirement') {
        baseFee += 400; // Add $400 for retirements.
    }

    // Return the total calculated fee.
    return baseFee;
}

// Define a function to display specified content by targeting an element's ID and setting its text content.
function outputToPage(elementId, content) {
    document.getElementById(elementId).textContent = content; // Update the text content of the specified element.
}
