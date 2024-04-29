$(document).ready(function() {
  // Ensure that the code only runs after the entire HTML document has loaded.

  // Tab functionality
  $('.tab-link').click(function() {
    // When a tab link is clicked, execute this function.
    var tab_id = $(this).attr('data-tab'); // Retrieves the 'data-tab' attribute value of the clicked tab.
    $('.tab-link').removeClass('current'); // Removes 'current' class from all tabs to deactivate them.
    $('.tab-content').removeClass('current'); // Removes 'current' class from all content to hide them.
    $(this).addClass('current'); // Adds 'current' class to clicked tab, making it active.
    $("#" + tab_id).addClass('current'); // Makes the corresponding tab content visible by adding 'current' class.
  });

  // Password strength checker
  $('#password').on('input', function() {
    // Trigger this function whenever there is input in the password field.
    var strength = 0; // Initialize password strength level.
    var password = $(this).val(); // Get the current value of the password field.
    var strengths = {
      0: "Very Weak",
      1: "Weak",
      2: "Moderate",
      3: "Strong",
      4: "Very Strong"
    }; // Defines the password strength levels.

    // Check various conditions to increase the password strength level
    if (password.length >= 6) strength++; // Checks if password length is at least 6.
    if (password.match(/\d+/)) strength++; // Checks for at least one digit.
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++; // Checks for both lower and uppercase letters.
    if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) strength++; // Checks for presence of special characters.

    // Update the password strength indicator based on computed strength.
    $('#passwordStrength').text('Strength: ' + strengths[strength]); // Display the current strength level.
  });

  // Form submission handling for loginForm
  $('#loginForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional manner.
    var email = $('#email').val(); // Retrieves the value from the email input field.
    var password = $('#password').val(); // Retrieves the value from the password input field.
    var telephone = $('#telephone').val(); // Retrieves the value from the telephone input field.
    var agreeYes = $('#checkbox1').is(':checked'); // Checks if the 'Yes' checkbox is checked.
    var agreeNo = $('#checkbox2').is(':checked'); // Checks if the 'No' checkbox is checked.

    // Validate the telephone number format
    if (!/^\d{10}$/.test(telephone)) {
      alert('Telephone number must be 10 digits.'); // Alert if the phone number isn't 10 digits.
      return;
    }

    // Validate agreement to terms and conditions through checkboxes
    if (agreeYes && agreeNo) {
      alert('Please check only one box for terms and conditions.'); // Alert if both checkboxes are checked.
      return;
    } else if (!agreeYes && !agreeNo) {
      alert('Please select Yes or No for the terms and conditions.'); // Alert if no checkbox is checked.
      return;
    } else if (agreeNo) {
      alert('You must agree to the terms to use the website.'); // Alert if 'No' is checked.
      return;
    }

    // Display a confirmation message if all validations pass
    alert('Login successful!\nEmail: ' + email + '\nPassword: ' + password + '\nTelephone: ' + telephone);
  });

  // Page reset functionality
  $('#clickMeButton').click(function() {
    window.location.href = 'index.html'; // Redirects or reloads the page when the button is clicked.
  });
});
