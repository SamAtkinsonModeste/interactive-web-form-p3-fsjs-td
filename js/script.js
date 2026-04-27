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
const userNameInput = selectElement("#name");
const userEmailInput = selectElement("#email");
const regexEmail = /^[^@]+@[^@.]+\.[a-z]+$/i;
const jobTitleSelector = selectElement("#title");
const otherJobInput = selectElement("#other-job-role");
const tShirtDesignSelector = selectElement("#design");
const colorSelector = selectElement("#color");
const colorOptions = selectAllElements("[data-theme]");
const activitiesFieldset = selectElement("#activities");
const activitiesCheckboxes = activitiesFieldset.querySelectorAll(
  "input[type=checkbox]",
);
let totalActivitesCost = 0;
const activitiesTotalCost = selectElement("#activities-cost");
const paymentMethodSelect = selectElement("#payment");
const creditCardDiv = selectElement("#credit-card");
const payPalDiv = selectElement("#paypal");
const bitcoinDiv = selectElement("#bitcoin");

//!SECTION - Initial Page State
userNameInput.focus();
showHideElements(otherJobInput, "hide");
colorSelector.disabled = true;
paymentMethodSelect.value = "credit-card";
showHideElements(payPalDiv, "hide");
showHideElements(bitcoinDiv, "hide");

//!SECTION - Basic Info
jobTitleSelector.addEventListener("change", () => {
  if (jobTitleSelector.value === "other") {
    showHideElements(otherJobInput, "show");
  } else {
    showHideElements(otherJobInput, "hide");
  }
});

//!SECTION - T-Shirt

//!SECTION - Register for Activities

//!SECTION - Payment Info

//!SECTION - Utility Functions

//!SECTION - Event Listeners
