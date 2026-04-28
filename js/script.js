//!SECTION - Helper Arrow Functions
// Selects a single DOM element
const selectElement = (elementSelected) =>
  document.querySelector(elementSelected);

// Selects multiple DOM elements
const selectAllElements = (allElementsSelected) =>
  document.querySelectorAll(allElementsSelected);

/**
 * Tests a value against a regex pattern
 * @param {RegExp} regex
 * @param {string} elementValue
 * @returns {boolean} True if the value matches the regex pattern
 */
const regexValidator = (regex, elementValue) => regex.test(elementValue);

/**
 * Shows or hides a DOM element by updating its display property
 * @param {HTMLElement} element
 * @param {string} visibility - "show" or "hide"
 */
const showHideElements = (element, visibility) => {
  if (visibility === "hide") {
    element.style.display = "none";
  } else if (visibility === "show") {
    element.style.display = "block";
  }
};

/**
 * Marks an input as valid by updating its parent element
 * Adds the 'valid' class and removes 'not-valid'
 * Hides the associated hint element
 * @param {HTMLElement} validElement
 */
const showValidState = (validElement) => {
  validElement.parentElement.classList.add("valid");
  validElement.nextElementSibling.style.display = "none";
  validElement.parentElement.classList.remove("not-valid");
};

/**
 * Marks an input as invalid by updating its parent element
 * Adds the 'not-valid' class and removes 'valid'
 * Displays the associated hint element and updates its message if provided
 * @param {HTMLElement} errorElement
 * @param {string} [errorMessage]
 */
const showErrorState = (errorElement, errorMessage) => {
  errorElement.parentElement.classList.add("not-valid");
  errorElement.nextElementSibling.style.display = "block";
  if (errorMessage) {
    errorElement.nextElementSibling.textContent = errorMessage;
  }
  errorElement.parentElement.classList.remove("valid");
};

/**
 * Checks if at least one checkbox is selected within a container
 * Updates the container validation state and hint visibility
 * @param {Nodelist} checkboxes
 * @param {HTMLElement} checkboxContainer
 * @param {HTMLElement} errorHint
 * @returns {Boolean} True if at least one checkbox is checked
 */

function oneCheckboxChecked(checkboxes, checkboxContainer, errorHint) {
  let foundActivityChecked = false;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      foundActivityChecked = true;
    }
  });

  if (!foundActivityChecked) {
    checkboxContainer.classList.add("not-valid");
    checkboxContainer.classList.remove("valid");
    showHideElements(errorHint, "show");
  } else {
    checkboxContainer.classList.add("valid");
    checkboxContainer.classList.remove("not-valid");
    showHideElements(errorHint, "hide");
  }

  return foundActivityChecked;
}

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
const activitiesHintP = selectElement(".activities-hint");
const activitiesCheckboxes = activitiesFieldset.querySelectorAll(
  "input[type=checkbox]",
);
let totalActivitesCost = 0;
const activitiesTotalCost = selectElement("#activities-cost");
const paymentMethodSelect = selectElement("#payment");
const creditCardDiv = selectElement("#credit-card");
const payPalDiv = selectElement("#paypal");
const bitcoinDiv = selectElement("#bitcoin");
const formConference = selectElement("form");

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
tShirtDesignSelector.addEventListener("change", () => {
  if (tShirtDesignSelector.value !== "") {
    colorSelector.disabled = false;
  } else {
    colorSelector.disabled = true;
  }

  // Reset selected color before updating available options
  colorSelector.value = "";

  colorOptions.forEach((option) => {
    if (tShirtDesignSelector.value !== option.dataset.theme) {
      option.disabled = true;
      option.hidden = true;
    } else {
      option.disabled = false;
      option.hidden = false;

      if (colorSelector.value === "") {
        colorSelector.value = option.value;
      }
    }
  });
});

//!SECTION - Register for Activities
activitiesCheckboxes.forEach((activeCheckbox) => {
  activeCheckbox.addEventListener("focus", () => {
    activeCheckbox.parentElement.classList.add("focus");
  });
  activeCheckbox.addEventListener("blur", () => {
    activeCheckbox.parentElement.classList.remove("focus");
  });
});

activitiesFieldset.addEventListener("change", (evt) => {
  const currentActivityCheckbox = evt.target;

  // Convert dataset cost from string to number before updating total
  const cost = Number(currentActivityCheckbox.dataset.cost);
  if (currentActivityCheckbox.checked) {
    totalActivitesCost += cost;
  } else {
    totalActivitesCost -= cost;
  }
  activitiesTotalCost.textContent = `Total: $${totalActivitesCost}`;

  //Handling Checkbox Activities Time Conflicts
  const activityTimeCheckboxes = activitiesFieldset.querySelectorAll(
    "[data-day-and-time]",
  );

  activityTimeCheckboxes.forEach((activityTimeCheckbox) => {
    if (
      activityTimeCheckbox.dataset.dayAndTime ===
        currentActivityCheckbox.dataset.dayAndTime &&
      activityTimeCheckbox !== currentActivityCheckbox
    ) {
      if (currentActivityCheckbox.checked) {
        activityTimeCheckbox.disabled = true;
        activityTimeCheckbox.parentElement.classList.add("disabled");
      } else {
        activityTimeCheckbox.disabled = false;
        activityTimeCheckbox.parentElement.classList.remove("disabled");
      }
    }
  });

  //I farted

  //Check that at least 1 Checkbox is checked
  oneCheckboxChecked(activitiesCheckboxes, activitiesFieldset, activitiesHintP);
});
//!SECTION - Payment Info
paymentMethodSelect.addEventListener("change", () => {
  if (paymentMethodSelect.value === "paypal") {
    showHideElements(payPalDiv, "show");
    showHideElements(creditCardDiv, "hide");
    showHideElements(bitcoinDiv, "hide");
  } else if (paymentMethodSelect.value === "bitcoin") {
    showHideElements(bitcoinDiv, "show");
    showHideElements(payPalDiv, "hide");
    showHideElements(creditCardDiv, "hide");
  } else {
    showHideElements(creditCardDiv, "show");
    showHideElements(payPalDiv, "hide");
    showHideElements(bitcoinDiv, "hide");
  }
});

//!SECTION - Form & Form Elements Validation
//TASK-BUILD - Live Validate User's Name Input
userNameInput.addEventListener("input", () => {
  if (userNameInput.value.trim() !== "") {
    showValidState(userNameInput);
  } else {
    showErrorState(userNameInput);
  }
});

//TASK-BUILD - Live Validate Users Email Input
userEmailInput.addEventListener("input", () => {
  if (userEmailInput.value.trim() === "") {
    console.log(userEmailInput.value);
    showErrorState(userEmailInput, "Please enter an email address");
  } else if (!regexValidator(regexEmail, userEmailInput.value)) {
    console.log(userEmailInput.value);
    showErrorState(userEmailInput, "Email address must be formatted correctly");
  } else {
    showValidState(userEmailInput);
  }
});

//TASK-BUILD - Validation on the Form element
formConference.addEventListener("submit", (evt) => {
  // Tracks overall form validity to determine if submission should be prevented
  let valid = true;

  //User Name Input
  if (userNameInput.value.trim() !== "") {
    showValidState(userNameInput);
  } else {
    showErrorState(userNameInput);
    valid = false;
  }

  //User Email Input
  if (userEmailInput.value.trim() === "") {
    showErrorState(userEmailInput, "Please enter an email address");
    valid = false;
  } else if (!regexValidator(regexEmail, userEmailInput.value)) {
    showErrorState(userEmailInput);
    valid = false;
  } else {
    showValidState(userEmailInput);
  }

  //Activites Checkboxes
  if (
    !oneCheckboxChecked(
      activitiesCheckboxes,
      activitiesFieldset,
      activitiesHintP,
    )
  ) {
    valid = false;
  }

  //!SECTION - Card Payment
  //Card Number
  if (paymentMethodSelect.value === "credit-card") {
    const regexCreditCardNumbers = /^\d{13,16}$/;
    const creditCardNumberInput = selectElement("#cc-num");
    if (regexValidator(regexCreditCardNumbers, creditCardNumberInput.value)) {
      showValidState(creditCardNumberInput);
    } else {
      showErrorState(creditCardNumberInput);
      valid = false;
    }

    //Zip Code
    const zipCodeInput = selectElement("#zip");
    const regexZipCode = /^\d{5}$/;
    if (regexValidator(regexZipCode, zipCodeInput.value)) {
      showValidState(zipCodeInput);
    } else {
      showErrorState(zipCodeInput);
      valid = false;
    }

    //CVV Number
    const cvvNumbersInput = selectElement("#cvv");
    const regexCvvNumbers = /^\d{3}$/;
    if (regexValidator(regexCvvNumbers, cvvNumbersInput.value)) {
      showValidState(cvvNumbersInput);
    } else {
      showErrorState(cvvNumbersInput);
      valid = false;
    }
  }
  //Prevent Form Submission If Form Elements Not Valid
  if (!valid) {
    evt.preventDefault();
  }
});
