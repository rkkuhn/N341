/*
  Online Learning Platform
  Lab 1 - Expressions, Functions, and Objects
*/

// Requirement 1: Declare a string variable
var strUserName = "John Doe"; // Example string value

// Requirement 2: Declare an integer variable
var intAge = 25; // Example integer value

// Requirement 3: Declare a Boolean variable
var bolHasEnrolled = true; // Example Boolean value

// Requirement 4: Create a simple function for output
function sendOutputToPage(elementId, label, content) {
    var outputElement = document.getElementById(elementId);
    outputElement.innerHTML = `<p>${label}: ${content}</p>`;
}

// Requirement 5: Use a function to output all three variables to the page
sendOutputToPage("elCourseOutput", "Username", strUserName);
sendOutputToPage("elDashboardOutput", "Age", intAge);
sendOutputToPage("elDashboardOutput", "Enrollment Status", bolHasEnrolled);

// Requirement 6: Create an array of strings
var arrCourses = ["Mathematics", "Programming", "History", "Language Arts", "Science"];

// Requirement 7: Create an array of integers
var arrProgress = [10, 25, 50, 75, 100];

// Requirement 8: Use a function to output the values of both arrays
sendOutputToPage("elCourseOutput", "Course List", arrCourses.join(", "));
sendOutputToPage("elDashboardOutput", "Progress", arrProgress.join(", "));

// Requirement 9: Use three arithmetic operators to change values in the array of integers
arrProgress = arrProgress.map(value => value * 2);

// Requirement 10: Use two different string methods to change values in the array of strings
arrCourses = arrCourses.map(course => course.toUpperCase());

// Requirement 11: Use a function to output the values of both modified arrays
sendOutputToPage("elCourseOutput", "Modified Course List", arrCourses.join(", "));
sendOutputToPage("elDashboardOutput", "Modified Progress", arrProgress.join(", "));

// Requirement 12: Create an object
var learningPlatform = {
    // Requirement 13: Object contains at least two properties
    username: strUserName,
    courses: arrCourses,

    // Requirement 14: Object contains at least one method that uses the keyword this
    displayUserInfo: function () {
        sendOutputToPage("elDashboardOutput", "Username (this)", this.username);
    },

    // Requirement 15: Object contains a method that returns a calculated value
    calculateTotalProgress: function () {
        return arrProgress.reduce((total, progress) => total + progress, 0);
    },

    // Requirement 16: Object contains a method that outputs properties to a page element
    outputProperties: function () {
        sendOutputToPage("elDashboardOutput", "Courses", this.courses.join(", "));
    },

    // Requirement 17: Object contains a method that uses the Math Object
    getRandomNumber: function () {
        return Math.random();
    },

    // Requirement 18: Object contains a method that uses the Date Object
    getCurrentDate: function () {
        return new Date().toDateString();
    },

    // Requirement 19: Initialize object's properties to visible values
    initializeProperties: function () {
        this.username = "Jane Doe";
        this.courses = ["Art", "Music", "Geography", "Physical Education", "Computer Science"];
    }
};

// Requirement 20: Use object's output method to output property values to the page
learningPlatform.outputProperties();

// Requirement 21: Use dot notation inside a method to update at least one of the object's properties
learningPlatform.initializeProperties();

// Requirement 22: Call object's method that uses the Math Object
sendOutputToPage("elDashboardOutput", "Random Number", learningPlatform.getRandomNumber());

// Requirement 23: Call object's method that uses the Date Object
sendOutputToPage("elDashboardOutput", "Current Date", learningPlatform.getCurrentDate());

// Requirement 24: After modifying properties, use object's output method to send values to a different page element
learningPlatform.outputProperties();
