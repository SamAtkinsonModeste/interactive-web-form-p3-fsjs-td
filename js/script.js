//!SECTION - Helper Arrow Functions
// Selects a single DOM element
const selectElement = (elementSelected) =>
  document.querySelector(elementSelected);

// Selects multiple DOM elements
const selectAllElements = (allElementsSelected) =>
  document.querySelectorAll(allElementsSelected);

//Tests a value against a regex pattern
const regexValidator = (regex, elementValue) => regex.test(elementValue);

//Shows and Hides elements
const showHideElements = (element, visibility) => {
  if (visibility === "hide") {
    element.style.display = "none";
  } else if (visibility === "show") {
    element.style.display = "block";
  }
};

//Displays a form element's state as valid
const showValidState = (validElement) => {
  validElement.parentElement.classList.add("valid");
  validElement.nextElementSibling.style.display = "none";
  validElement.parentElement.classList.remove("not-valid");
};

//Displays a form element state as not valid and display error messages
const showErrorState = (errorElement, errorMessage) => {
  errorElement.parentElement.classList.add("not-valid");
  errorElement.nextElementSibling.style.display = "block";
  if (errorMessage) {
    errorElement.nextElementSibling.textContent = errorMessage;
  }
  errorElement.parentElement.classList.remove("valid");
};

//!SECTION - Global Variables

//!SECTION - Initial Page State

//!SECTION - Basic Info

//!SECTION - T-Shirt

//!SECTION - Register for Activities

//!SECTION - Payment Info

//!SECTION - Utility Functions

//!SECTION - Event Listeners
