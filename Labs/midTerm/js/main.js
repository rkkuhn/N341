/*
**************************************
TITLE: Lab 3 - Main Page
AUTHOR: R Kelly Kuhn (RKK)
CREATE DATE: 22 Feb 2024
PURPOSE: The code repesents the CSS layout for the main page of Lab 3.
LAST MODIFIED ON:  (RKK)
LAST MODIFIED BY: (RKK)
MODIFICATION HISTORY:
22 Feb 2024 - Created the JS file for the lab. (RKK)
25 Feb 2024 - Created all the JS requirements for the lab. (RKK)
27 Feb 2024 - Added the Mutation Observer requirement. Added the eventlistener for
              when the second submit is clicked a pop up box appears letting the user
              know they about to leave the page. (RKK)

**************************************
*/


document.addEventListener('DOMContentLoaded', function () {
    // 1. (Handled in HTML) Create a new HTML file with nested elements and a consistent theme.

    // 3. Event listener without parameters (Toggle class on header click)
    document.querySelector('.header').addEventListener('click', function () {
        this.classList.toggle('header-clicked'); // Visible result: changes header class
    });

    // 4. Event listener with parameters (Change link color on hover)
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('mouseover', function () {
            this.style.color = 'red'; // Visible result: changes text color to red
        });
        link.addEventListener('mouseout', function () {
            this.style.color = ''; // Visible result: reverts text color
        });
    });

    // 5. Demonstrate Event Bubbling (Container click alerts)
    document.querySelector('.container').addEventListener('click', function (e) {
        alert('Container clicked!'); // Event bubbles up to container
    });

    // 7. Use a method to stop the Event Bubbling (Company info click)
    document.querySelector('#company-info').addEventListener('click', function (e) {
        alert('Company Info clicked! Stopping bubbling.');
        e.stopPropagation(); // Stops event bubbling
    });

    // 6. Use the Event Object (Display clicked element details)
    document.body.addEventListener('click', function (e) {
        document.querySelector('.footer p').textContent = `Clicked element: ${e.target.tagName}, Class/ID: ${e.target.className || e.target.id}`;
    });

    // 8. Focus/Blur Events for input fields
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.backgroundColor = 'lightblue'; // Visible result: changes background color on focus
        });
        input.addEventListener('blur', function () {
            this.style.backgroundColor = ''; // Visible result: reverts background color on blur
        });
    });

    // 9. Mouse Events (header background changes)
    document.querySelector('.header').addEventListener('mouseenter', function () {
        this.style.backgroundColor = 'lightgrey'; // Visible result: change on mouse enter
    });
    document.querySelector('.header').addEventListener('mouseleave', function () {
        this.style.backgroundColor = '#f3f3f3'; // Visible result: revert on mouse leave
    });
    document.querySelector('.header').addEventListener('dblclick', function () {
        this.style.backgroundColor = 'pink'; // Visible result: change on double click
    });

    // 10. Keyboard Events (background color changes)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'a') {
            document.body.style.backgroundColor = 'lavender'; // Visible result: changes background color
        }
    });
    document.addEventListener('keyup', function (e) {
        if (e.key === 'a') {
            document.body.style.backgroundColor = ''; // Visible result: reverts background color
        }
    });

// 11. Form Events to prevent submission and show a message
document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission
    // Display a confirmation dialog
    const isLeaving = confirm('You are about to leave this page. Are you sure you want to leave?');
    if (isLeaving) {
        // Logic to actually leave the page or submit the form could go here
        // For demonstration, we'll just log to the console
        console.log('User chose to leave the page.');
        // You could replace the above console.log with form submission logic or page navigation
    } else {
        // If user cancels, just log a message or handle accordingly
        console.log('User chose to stay on the page.');
    }
});


    // 12. Mutation Event (observe changes in the DOM)
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                alert('DOM changed!'); // Visible result: alerts when DOM changes
            }
        });
    });
    const config = { attributes: true, childList: true, subtree: true };
    observer.observe(document.querySelector('.container'), config);

    // 13. Before Unload Event (alert before leaving the page)
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = ''; // Visible result: alerts user before leaving page
    });

    // Additional: Confirmation dialog on navigation link click
    document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevents immediate navigation
            const confirmed = confirm('Are you sure you want to leave this page?');
            if (confirmed) {
                window.location.href = this.getAttribute('href'); // If confirmed, navigates to the link's href
            }
        });
    });
});
