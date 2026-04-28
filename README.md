# 📝 Interactive Form – Project 3

<p align="center">
A responsive and interactive registration form built using vanilla JavaScript.<br>
Created as part of the Treehouse Full Stack JavaScript Techdegree.
</p>

---

## 🧭 Table of Contents

- [🔗 Live Project](#-live-project)
- [📸 Responsive Preview](#-responsive-preview)
- [📌 Project Overview](#-project-overview)
- [⚙️ Key Features](#️-key-features)
  - [🧠 Form Interactivity](#-form-interactivity)
  - [💳 Activities Section](#-activities-section)
  - [✅ Custom Form Validation](#-custom-form-validation)
  - [⚡ Exceeds Expectations Features](#-exceeds-expectations-features)
  - [🎯 Accessibility Enhancements](#-accessibility-enhancements)

- [🛠️ Technologies Used](#️-technologies-used)
- [🧩 What I Learned](#-what-i-learned)
- [🚀 Future Improvements](#-future-improvements)
- [📚 Acknowledgements](#-acknowledgements)

---

## 🔗 Live Project

👉 [View Live Site](https://samatkinsonmodeste.github.io/interactive-web-form-p3-fsjs-td/)

🔵 [Back to top](#-interactive-form--project-3)

---

## 📸 Responsive Preview

<p align="center">
  <img src="img/screenshot-live-project.png" alt="Responsive design preview on multiple devices">
</p>

🔵 [Back to top](#-interactive-form--project-3)

---

## 📌 Project Overview

This project focuses on building a dynamic form with real-time interactivity and custom validation, without relying on built-in HTML5 validation.

The goal was to improve user experience by providing clear feedback, preventing errors, and guiding the user through the form.

🔵 [Back to top](#-interactive-form--project-3)

---

## ⚙️ Key Features

### 🧠 Form Interactivity

- Name field automatically focused on page load
- Conditional “Other Job Role” input display
- T-shirt colour options dynamically update based on selected design
- Payment sections update based on selected method

---

### 💳 Activities Section

- Running total cost updates as activities are selected
- Prevents selection of conflicting activities (same day/time)
- Visual disabled state for unavailable options

---

### ✅ Custom Form Validation

- Name field must not be empty
- Email must follow correct format
- At least one activity must be selected
- Credit card fields validated when selected:
  - Card number (13–16 digits)
  - ZIP code (5 digits)
  - CVV (3 digits)

---

### ⚡ Exceeds Expectations Features

- **Real-time validation**
  - Name and Email fields validate as the user types

- **Conditional error messaging**
  - Different messages for empty vs incorrectly formatted email

- **Conflicting activity handling**
  - Prevents selecting overlapping sessions

---

### 🎯 Accessibility Enhancements

- Clear visual validation states (`valid` / `not-valid`)
- Focus styles added for activity checkboxes
- Error messages displayed clearly without alerts

🔵 [Back to top](#-interactive-form--project-3)

---

## 🛠️ Technologies Used

- HTML5 (provided by Treehouse)
- CSS3 (customised styling)
- JavaScript (form logic and validation)

🔵 [Back to top](#-interactive-form--project-3)

---

## 🧩 What I Learned

- Managing form logic with event listeners
- Creating reusable validation helper functions
- Using regex for real-world input validation
- Improving UX through real-time feedback
- Writing cleaner, structured JavaScript

🔵 [Back to top](#-interactive-form--project-3)

---

## 🚀 Future Improvements

- Add ARIA attributes for better accessibility
- Improve mobile UX interactions
- Refactor validation into reusable modules

🔵 [Back to top](#-interactive-form--project-3)

---

## 📚 Acknowledgements

- Treehouse Full Stack JavaScript Techdegree
- Starter HTML & CSS provided by Treehouse

🔵 [Back to top](#-interactive-form--project-3)
