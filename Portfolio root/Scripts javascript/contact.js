const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const form = document.getElementById("contactform");

function validateFirstName()
{
    const value = firstName.value.trim();

    const namePattern = /^[A-Za-z]+$/;

    if (value.length < 2)
    {
        ShowError(firstName, "firstNameError", "First name must be at least 2 characters.");

        return false;
    }

    if(!namePattern.test(value))
    {
        ShowError(firstName, "firstNameError", "Letters only.");

        return false;
    }

    showSuccess(firstName,"firstNameError");
}

function validateLastName()
{
    const value = lastName.value.trim();

    const namePattern = /^[A-Za-z]+$/;

    if(value.length < 2)
    {
        ShowError(lastName, "lastNameError", "Last name must be at least 2 characters");

        return false;
    }

    if(!namePattern.test(value))
    {
        ShowError(lastName, "lastNameError", "Letters only.");
        return false;
    }

    showSuccess(lastName, "lastNameError");
    return true;
}

function validateEmail()
{
    const value = email.value.trim().toLowerCase();

    const emailPattern = /^[a-zA-Z0-9._%+-]@(gmail\.com|outlook\.com|icloud\.com)$/;

    if(!emailPattern.test(value))
    {
        ShowError( email, "emailError", "emailError", "Use Gmail, Outlook or iCloud.");

        return false;
    }

    showSuccess(email, "emailError");
    return true;
}

function validateSubject()
{
    const value = subject.value.trim();

    if (value.length<5)
    {
        ShowError(subject, "subjectError", "Subject must be at least 5 characters.");
        return false;
    }

    showSuccess(subject, "subjectError");
    return true;
}

function validateMessage()
{
    const value = message.value.trim();

    if(value.length === 0)
    {
        ShowError(message, "messageError", "Message cannot be empty.")

        return false;
    }

    if(value.length > 500)
    {
        ShowError(message, "messageError", "Maximum 500 characters.");
        return false;
    }

    showSuccess(message, "messageError");
    return true;
}

function ShowError(element, errorId, message)
{
    const error = document.getElementById(errorId);

    error.textContent = message;

    element.classList.remove("valid");
    element.classList.add("invalid");
}

function showSuccess(element, errorId)
{
    const error = document.getElementById(errorId);

    error.textContent = "";

    element.classList.remove("invalid");
    element.classList.add("valid");
}

firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input",validateSubject);
subject.addEventListener("input", validateSubject);
message.addEventListener("input", validateMessage);

form.addEventListener("submit", function(event)
{
event.preventDefault();
const isValid = validateFirstName() && validateLastName() && validateEmail() && validateSubject() && validateMessage();
if (isValid)
    {alert("form submitted successfully!");} 
});