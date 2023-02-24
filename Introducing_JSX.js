// * => React :
// * index.html :
/*
<div id="root">
  <!-- This div's content will be managed by React. -->
</div>
*/
// * App.js :
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello, {formatName(user)}</h1>); // * Hello, Harper Perez

// * root.render(<h1>{element}</h1>); // Hello, Harper Perez

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

/* 
! JSX can be used inside of - 
    * 'if' statements
    * 'for' loops
    * assign it to variables
    * accept it as arguments 
    * return it from functions
*/
// ? => JSX inside 'if' statement :

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// ? => Assign JSX to a variable :

function JSX_Component() {
  const greeting = <h1>Hello, world!</h1>;

  return <div>{greeting}</div>;
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// ? => JSX inside 'for' loop :

// * Here is an example of using a for loop to render a list of items in JSX :
function myComponent(props) {
  const items = props.items;
  const itemList = [];

  for (let i = 0; i < items.length; i++) {
    itemList.push(<li key={i}>{items[i]}</li>);
  }

  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
}

/*
    ! Code explanation : 
        ? Identifying the core elements of the program : 
            *  function 
                * items - variable 
                * itemList - array 
                * for - loop (iteration)
                * return - itemList (array of items)
    * In this example, we create a function that contains a 'for' loop to iterate over the items array and create an array of 
    * '<li>' elements with the item values as the 'content' and an unique 'key' for each element. 
    * Then, we render the array of '<li>' elements within a '<ul>' element. 

    ! Note : 
        * When using a 'for' loop to create a list of JSX elements, it is important to provide an 'unique key' for each element.
        * This helps React to efficiently update the list when changes are made. 
    */

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// ? JSX as function argument :

// * passing JSX as a function argument :
function JSX_as_function_argument(props) {
  const JSX_element = props.JSX_element;

  return <div>{JSX_element}</div>;
}

function App() {
  return <JSX_as_function_argument JSX_element={<h1>Hello, world!</h1>} />;
}

/*
    ! Code explanation :
        * In this example, we define a functional component - 'JSX_as_function_argument' which accepts a 'JSX_element' prop. 
        * The 'JSX_element' prop is then rendered within a '<div>' element. 
        * We then define a parent component - 'App', that renders 'JSX_as_function_argument' component and passes a JSX element 
        * as the value of the 'JSX_element' prop. (value : <h1>Hello, world!</h1>)
        
    ! Note : 
        * When passing JSX as a function argument, we need to wrap the JSX element in curly braces - '{}' to indicate that it is a JavaScript expression. 
    */

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// ? JSX as a function return :
function parent_function_component() {
  function greeting_user() {
    return <h1>Hello, world!</h1>;
  }

  return <div>{greeting_user()}</div>;
}

/*
    ! Code explanation : 
        * Function component : parent_function_component()
        * Function inside function component : 'greeting_user()' - returns a JSX element : (<h1>Hello, world!</h1>)
        * Render the result of calling 'greeting_user()' within a '<div>' element 
    
    ? Use-case : 
        * Useful technique for creating dynamic pieces of JSX based on the state of our application. 
        * We can use functions to calculate values to perform other logic and return the result as JSX to be rendered in our component.
*/

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
 
// * Here's an example of a function that creates dynamic JSX based on the state of an application:   
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0); // 'useState' Hook 

  function renderCount() {
    if (count === 0) {
      return <p>The count is currently zero.</p>;
    } else {
      return <p>The count is currently {count}.</p>;
    }
  }
  
  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <div>
      {renderCount()}
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}
  
 
/*
  ! Code explanation : 
  In this example, we define a functional component called MyComponent. Inside the component, we use the useState hook to define a count state variable with an initial value of 0.

  We then define a function called renderCount that returns a JSX element based on the current value of count. If count is 0, it returns a <p> element that says "The count is currently zero." Otherwise, it returns a <p> element that says "The count is currently {count}." We call this function to dynamically render the appropriate text based on the value of count.

  We also define a function called handleClick that increments count when a button is clicked.

  Finally, we render the result of calling renderCount() along with a button that calls handleClick when clicked. This creates a dynamic piece of JSX that changes based on the state of our application (the value of count).
*/
 
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

// * Specifying Attributes with JSX :
const new_element = <a href="https://www.reactjs.org"> link </a>;

const img_element = <img src={user.avatarUrl}></img>;

// * JSX Prevents - Injection Attacks :
// It is safe to embed user input in JSX:

const title = response.potentiallyMaliciousInput;
// This is safe:
const user_input = <h1>{title}</h1>;

/* By default, React DOM escapes any values embedded in JSX before rendering them.
   Thus it ensures that you can never inject anything that’s not explicitly written in your application.
   Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
*/

// ! How JSX prevents injection attacks : rendering (translating) the user input as plain text -
function take_user_input() {
  const user_input = '<script>alert("Hello, world!")</script>'; // script-tag

  return (
    <div>
      <p> User input : {user_input}</p> // ? code explanation
    </div>
  );
}

/*
! code explanation : 
    * 'user_input' variable contains a script tag. 
    * When we render 'user_input' within a 'p' element, React automatically escapes special characters in the script tag and renders it as plain text.  

? Resulting HTML code : 
    <div>
        * <p>User input : &lt:script&gt;alert("Hello, world!);&lt;/script&gt;</p>
    </div>
*/

/*
* => JSX represents objects : 

! Babel compiles JSX down to React.createElement() calls.

* These two examples are identical:


*/

const JSX_element = <h1 className="greeting">Hello, world!</h1>;

// * JSX code after compilation :

const compiled_JSX_element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

// * React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

const compiled_element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!",
  },
};

