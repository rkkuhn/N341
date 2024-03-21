


// Ensure that the script runs after the DOM is fully loaded
$(document).ready(function() {
    // Function to add a name to the list
    function addName(name) {
        // Creates a new div element for the name
        let nameBox = $('<div class="nameBox"></div>').text(name);
        // Click event to change the name upon clicking
        nameBox.click(function() {
            let newName = prompt("Change name:", $(this).text());
            if (newName) {
                $(this).text(newName);
            }
        });
        // Contextmenu event (right-click) to delete the name
        nameBox.on('contextmenu', function(e) {
            e.preventDefault(); // Prevents the default context menu
            $(this).remove(); // Removes the name box
        });
        // Appends the new name box to the names list container
        $('#namesList').append(nameBox);
    }

    // Event handler for the Add button
    $('#addBtn').click(function() {
        let name = $('#nameInput').val(); // Gets the name from the input field
        if (name) {
            addName(name); // Adds the name to the list
            $('#nameInput').val(''); // Clears the input field
        }
    });

    // Example initial names to display on load
    let initialNames = ["John Doe", "Jane Doe", "Mike Smith"];
    initialNames.forEach(addName); // Adds each initial name to the list
});
