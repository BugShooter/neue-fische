# TypeScript DOM Exercises

These are a series of TypeScript exercises focused on DOM manipulation, which were completed as part of Advanced Web Development training.

## Table of Contents

- [Exercise 1: Update Text on Button Click](#exercise-1-update-text-on-button-click)
- [Exercise 2: Input and Display](#exercise-2-input-and-display)
- [Exercise 3: Toggle Visibility](#exercise-3-toggle-visibility)
- [Exercise 4: Add Items to List](#exercise-4-add-items-to-list)
- [Exercise 5: Delete Items from List](#exercise-5-delete-items-from-list)
- [Exercise 6: Counter with Increment & Decrement](#exercise-6-counter-with-increment--decrement)
- [Exercise 7: Change Background Color](#exercise-7-change-background-color)
- [Exercise 8: Character Count](#exercise-8-character-count)
- [Bonus Challenge: To-Do App](#bonus-challenge-to-do-app)

## How to Use

1. Clone the repository.
2. Navigate to the `ts-dom-exercises` directory.
3. Install dependencies with `npm install`.
4. Run the exercises using `npm start`.
5. Open the exercises in your browser to see the results.


## Exercise 1: Update Text on Button Click

*Objective:* Display a message when a button is clicked.

```html
<button id="helloBtn">Say Hello</button>
<p id="output"></p>
```

### Tasks:

In main.ts:
- Select the button and paragraph.
- Add a click listener to the button.
- Update the paragraph text to “Hello from TypeScript!”.

## Exercise 2: Input and Display
*Objective:* Capture user input and display it on screen.

```html
<input type="text" id="nameInput" placeholder="Enter name" />
<button id="submitBtn">Submit</button>
<p id="displayName"></p>
```

### Tasks:

- Get input value when the button is clicked.
- Display the name inside the paragraph.

## Exercise 3: Toggle Visibility

*Objective:* Hide or show a paragraph with a button click.

```html
<button id="toggleBtn">Toggle</button>
<p id="hiddenText">Now you see me!</p>
```

### Tasks:

- On click, toggle the visibility of the paragraph using `.style.display`.

## Exercise 4: Add Items to List

*Objective:* Dynamically add list items based on input.

```html
<input type="text" id="itemInput" />
<button id="addBtn">Add Item</button>
<ul id="itemList"></ul>
```
### Tasks:

Add input text as a new `<li>` to the list each time the button is clicked.

## Exercise 5: Delete Items from List

*Objective:* Add a delete button next to each list item and remove on click.

### Tasks:

- Extend Exercise 4.
- When an item is added, add a “Delete” button beside it.
- Clicking “Delete” removes that `<li>`.

## Exercise 6: Counter with Increment & Decrement

*Objective:* Create a counter app with “+” and “−” buttons.

```html
<button id="decreaseBtn">-</button>
<span id="counter">0</span>
<button id="increaseBtn">+</button>
```

### Tasks:
- Increment or decrement the counter on button click.

## Exercise 7: Change Background Color

*Objective:* Change the background color of a div using a dropdown.

```html
<select id="colorSelect">
  <option value="white">White</option>
  <option value="lightblue">Light Blue</option>
  <option value="lightgreen">Light Green</option>
</select>
<div id="colorBox" style="width:100px; height:100px; border:1px solid black;"></div>
```

### Tasks:

- Change the colorBox’s background color based on the selected option.

## Exercise 8: Character Count

*Objective:* Display a real-time character count from a textarea.

```html
<textarea id="textInput"></textarea>
<p id="charCount">0 characters</p>
```

### Tasks:

- On input, update the character count paragraph.

## Bonus Challenge: To-Do App

*Objective:* Build a basic to-do list with the ability to:

- Add tasks
- Mark them as done
- Remove tasks

```html
<input id="todoInput" placeholder="New task" />
<button id="addTodo">Add</button>
<ul id="todoList"></ul>
```

### Tasks:
- Add new list items with the input text.
- Each item has:
  - A checkbox to mark it as done
  - A delete button
- Style done items with a strikethrough.
