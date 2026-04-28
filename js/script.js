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
tShirtDesignSelector.addEventListener("change", () => {
  if (tShirtDesignSelector.value !== "") {
    colorSelector.disabled = false;
  } else {
    colorSelector.disabled = true;
  }

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
  const cost = Number(currentActivityCheckbox.dataset.cost);
  if (currentActivityCheckbox.checked) {
    totalActivitesCost += cost;
  } else {
    totalActivitesCost -= cost;
  }
  activitiesTotalCost.textContent = `Total: $${totalActivitesCost}`;

  //EXCEEDS
  const activityTimeCheckboxes = activitiesFieldset.querySelectorAll(
    "[data-day-and-time]",
  );
  console.log(activityTimeCheckboxes);
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

//!SECTION - Event Listeners
