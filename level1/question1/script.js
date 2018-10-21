
// Validate contact form on submit
$('#contactForm').submit(function (e) {

    // String for showing the result of validation
    var validationResult = "";

    // Validate name
    var nameInput = $("#name"); 
    
    if (nameInput.val() === "") {
        validationResult += "* Name is not present. Please enter your last name\n";
    }
    
    // Validate lastname
    var lastNameInput = $("#lastname"); 
    
    if (lastNameInput.val() === "") {
        validationResult += "* Last name is not present. Please enter your last name\n";
    }

    // Validate Norwegian phone number
    var phoneRegex = /\+\d{2} \d{8}$/;
    var phoneInput = $("#phone"); 
    
    // test to see if phone number format is correct
    if (!phoneRegex.test(phoneInput.val())) {
        validationResult += "* Your phone number ("+phoneInput.val()+") format is wrong. Please enter correct number. \n";
    }


    // Validate e-mail address
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailInput = $("#email"); 
    
    // test to see if e-mail format is correct
    if (!emailRegex.test(emailInput.val())) {
        validationResult += "* Your e-mail address("+emailInput.val()+") format is wrong. Please enter correct e-mail. \n";
    }

    // If there was validation errors (Not empty result string) prevent submit and log validation results
    if (validationResult !== "") {
        console.log(validationResult);
    
        e.preventDefault();
    }
    
});


