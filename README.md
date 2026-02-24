## 📌 Overview

This project demonstrates a basic **condition-based rules engine** built using React.

A similar concept was previously implemented in PHP for official use. This repository serves as an experimental implementation in ReactJS to explore frontend rule configuration and dynamic form handling.

---

## ⚙️ Working Concept

### 🔹 Rules

* Multiple rules can be created.
* Each rule consists of:

  * **Rule Name**
  * **Condition**
  * **Exception** (optional)

---

### 🔹 Condition

* A condition can be:

  * A **single rule**
  * A **group of multiple rules**
* Each condition must contain valid values.
* A condition includes:

  * One **primary rule type**
  * An optional **secondary rule type**

---

### 🔹 Exception

* Exception is optional.
* If added, it must contain valid values (cannot be partially filled).

---

### 🔹 Rule Structure

Each rule is configured dynamically based on dropdown selections:

1. Select a **rule type** from dropdown.
2. Based on the selected type:

   * An **operator** field appears.
   * A **value field** is displayed.

The value field can be:

* Text input
* Single-select dropdown
* Multi-select dropdown

---

## 🎯 Goal

To build a flexible and reusable rule configuration system in React that supports:

* Dynamic form rendering
* Conditional field logic
* Nested rule grouping
* Validation handling

---

## Run the Project
npm install
npm run dev
