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

// Array for the number of people
const numberOfPeopleArray = [30, 40, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300];

// Populate number of people dropdown
var numberOfPeopleDropdown = document.getElementById('numberOfPeople');
numberOfPeopleArray.forEach(function (number) {
    var option = document.createElement('option');
    option.value = number;
    option.text = number;
    numberOfPeopleDropdown.add(option);
});

// Array for the month names
const monthNamesArray = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Nov.', 'Dec.'];

// Populate month dropdown
var monthDropdown = document.getElementById('eventMonth');
monthNamesArray.forEach(function (month, index) {
    var option = document.createElement('option');
    option.value = index + 1; // Adding 1 to index to match month numbering
    option.text = month;
    monthDropdown.add(option);
});

// Populate day dropdown
var dayDropdown = document.getElementById('eventDay');
for (let day = 1; day <= 31; day++) {
    var option = document.createElement('option');
    option.value = day;
    option.text = day;
    dayDropdown.add(option);
}

// Populate year dropdown
var yearDropdown = document.getElementById('eventYear');
for (let year = 2024; year <= 2030; year++) {
    var option = document.createElement('option');
    option.value = year;
    option.text = year;
    yearDropdown.add(option);
}

// Add an event listener for the "Calculate Fee" button
document.getElementById('calculateFeeBtn').addEventListener('click', function () {
    // Fetch values from form inputs
    var venueType = document.getElementById('venueType').value;
    var eventType = document.getElementById('eventType').value;

    // Calculate registration fee based on venue type and event type
    var registrationFee = calculateRegistrationFee(venueType, eventType);

    // Display registration details and fee
    outputToPage('elVenueTypeOutput', 'Venue Type: ' + venueType);
    outputToPage('elEventTypeOutput', 'Event Type: ' + eventType);
    document.getElementById('calculateFeeBtn').style.display = 'none'; // Hide the button
    outputToPage('elRegistrationFeeOutput', 'Registration Fee: $' + registrationFee.toFixed(2));
});

// Function to calculate registration fee based on venue type and event type
function calculateRegistrationFee(venueType, eventType) {
    var baseFee = 0; // No fixed base fee

    // Adjust the fee based on venue type and event type
    if (venueType === 'outdoor') {
        baseFee += 400; // Additional fee for outdoor venue
    }

    if (venueType === 'indoor') {
        baseFee += 250; // Additional fee for indoor venue
    }

    if (eventType === 'corporate') {
        baseFee += 200; // Additional fee for corporate event
    }

    if (eventType === 'wedding') {
        baseFee += 700; // Additional fee for wedding event
    }

    if (eventType === 'reception') {
        baseFee += 400; // Additional fee for reception event
    }

    if (eventType === 'retirement') {
        baseFee += 400; // Additional fee for retirement event
    }

    // Get the button and registration fee output elements
    var calculateFeeBtn = document.getElementById('calculateFeeBtn');
    var registrationFeeOutput = document.getElementById('elRegistrationFeeOutput');

    // Hide the button and display the registration fee
    calculateFeeBtn.style.display = 'none';
    registrationFeeOutput.innerHTML = 'Registration Fee: $' + baseFee.toFixed(2);

    // Return the calculated fee
    return baseFee;
}

// Function to output content to the page
function outputToPage(elementId, content) {
    document.getElementById(elementId).textContent = content;
}
