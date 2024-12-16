# Controlled Forms in React Lab

Welcome to Reactville, a constantly evolving virtual metropolis. Let’s build this digital town together, one component at a time.

![reactville hero](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/controlled-forms-in-react-lab/assets/reactville.png)

## Introduction
In this lab, you’ll explore practical applications of React’s state management through controlled forms. You’ll build a dynamic form that allows users to add entries to a virtual bookshelf, practicing the synchronization of UI and state in React to ensure seamless user interactions.

## About
The local library is adding a feature to their website where users can add their favorite books to a virtual bookshelf. You’re going to help built the front end UI to make it happen!

You will develop a single component named `BookShelf` that contains both the controlled form and the display of the bookshelf. Using the `useState` hook, you will manage the form inputs and list of books, enabling real-time updates to the UI based on user input.

![example finished project](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/controlled-forms-in-react-lab/assets/solution-ui.png)

By the end of this lab, you’ll have a functional application where users can add books to a personalized bookshelf, with each new entry updating the display immediately—no page reloads required!

## Setup
Open your Terminal application and navigate to your `~/code/ga/labs` directory:

```
cd ~/code/ga/labs
```

Create a new Vite project for your React app:

```
npm create vite@latest
```

You’ll be prompted to choose a project name. Let’s name it `controlled-forms-in-react-lab`.

* Select a framework. Use the arrow keys to choose the `React` option and hit `Enter`.
* Select a variant. Again, use the arrow keys to choose `JavaScript` and hit `Enter`.

Navigate to your new project directory and install the necessary dependencies:

```
cd controlled-forms-in-react-lab
npm i
```

Open the project’s folder in your code editor:

```
code .
```

### Configuring ESLint
Before we begin, we need to adjust the ESLint configuration. Add the following rules to the `.eslintrc.cjs` file:

```js
rules: {
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
  'react/prop-types': 'off', // add this line
  'react/no-unescaped-entities': 'off' // add this line
},
```

The first addition prevents warnings if you’re not declaring types for your props (which we’re not), and the second prevents warnings if you’re using contractions within JSX.

### Clear `App.jsx`
Open the `App.jsx` file in the `src` directory and replace the contents of it with the following:

```jsx
// src/App.jsx

const App = () => {
  return <h1>Hello world!</h1>;
};

export default App;
```

### Starter CSS
Before getting started, add the following style rules to `index.css`:

First, change the existing style rules for `body` to this:

```css
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 100vh;
}
```

Then, add these rules **above** the `@media` rule:

```css
form {
  display: flex;
  flex-direction: column;
  width: 90%;
}

input {
  padding: 5px;
}

.bookshelfDiv {
  padding: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.formDiv {
  width: 60%;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.bookCardsDiv {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 20px;
}

.bookCard {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid white;
  padding: 5px;
  width: 40%;
  margin: 15px 10px;
  background-color: rgb(155, 155, 155);
  color: black;
}
```

### Running the development server
To start the development server and view our app in the browser, we’ll use the following command:

```
npm run dev
```

You should see that `Vite` is available on port number 5173:

```
localhost:5173
```

### GitHub setup
To add this project to GitHub, initialize a Git repository:

```
git init
git add .
git commit -m "init commit"
```

Make a new repository on GitHub named `controlled-forms-in-react-lab`.

Link your local project to your remote GitHub repo:

```
git remote add origin https://github.com/<github-username>/controlled-forms-in-react-lab.git
git push origin main
```
> 🚨 Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the `<` and `>`) in the URL above.

## Lab exercises

### 1. Create your component
Create a new component called `Bookshelf.jsx` and import `useState` at the top of the file:

```
import { useState } from 'react';
```

Use the following template to set up your `BookShelf` component:

```
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
```

Export `Bookshelf` from this file and import it into `App.jsx`:

```
// src/App.jsx
import './App.css';
import Bookshelf from './Bookshelf.jsx';

const App = () => {
  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf />
    </>
  );
};

export default App;
```

The remainder of the work in this lab will all take place inside of Bookshelf.jsx.

### 2. Define the initial state
* Initialize your state in Bookshelf.jsx:
    * Create a state variable `books` to store an array of book objects.
    * Define another state variable `newBook` to handle the inputs for new book additions. This will be an object with a `title` key and an `author` key, which should hold empty strings to start.

Example:
```
const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);
```

### 3. Create event handlers

For this lab, you’ll need two event handlers:

**1. `handleInputChange`**

**Purpose:** This function updates the form's state as the user types into the input fields. 

**Instructions**:
* Create a function named `handleInputChange` that will be triggered each time the user types in an input field.
* The function should take an event object as its argument. Use this event to access the `name` of the input field and the value the user has typed.
* Construct a new version of the `newBook` object that includes the updated fields. Make sure you maintain the values of other fields in `newBook` that aren’t currently being updated. (Hint: Use the spread operator `...` to create a new copy of the `newBook` object)
* Use the `setNewBook` setter function to update the state of `newBook` with this new object to reflect the changes in your UI.

**2. `handleSubmit`**

**Purpose:** This function manages the submission of the form, adding a new book to the list and resetting the input fields.

**Instructions:**

* Create a function named `handleSubmit` that will execute when the form is submitted.
* The function should also take an event object as its argument. Begin the function by stopping the default form submission action using `event.preventDefault()`.
* Use the `setBooks` setter function to update the `books` array state with this new list to include the newly added book. You’ll need to copy the current list of books and add the new book details from `newBook` to this list. (Hint: Use the spread operator `...`)
* Reset the `newBook` state to its initial empty values to clear the form fields, preparing them for the next entry.

**4. Form creation**

* Use JSX to create a form within your `BookShelf` component. The form should include sections for “Title” and “Author”.
* Add input fields for both “Title” and “Author”. These inputs will allow users to enter the details for the book they want to add to the shelf.
* Ensure each input field is connected to the corresponding property in the `newBook` state object. Use the `value` attribute for displaying the current state and the `onChange` attribute to update the state as the user types.
* Include a submit button in the form. Attach your `handleSubmit` event handler to the form’s `onSubmit` attribute to handle the form submission.

**5. Map through your books**

* Within the `BookShelf` component, use the `map` function to iterate over the `books` array. This array contains the list of books added by the user.
* For each book in the array, create a “book card”. Use a `<div>` to wrap the display of each book’s title and author.
* Ensure each book card is distinct and clearly displays the title and author of the book.