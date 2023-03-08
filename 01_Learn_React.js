// * URL : https://beta.reactjs.org/learn/describing-the-ui
// * Topic : Learn React -> Describing the UI 

// * section - 01 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// ? => Your First Component : 

function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }

// * section - 01 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 
  
// * section - 02 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// ? => Importing and exporting components : 
/* You can declare many components in one file, but large files can get difficult to navigate.
   To solve this, you can export a component into its own file, and then import that component from another file: 
*/

// ! => Profile.js || Gallery.js : segregation of components - 

// * Profile.js : 
export default function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }


// * Gallery.js : 
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// * section - 02 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// * section - 03 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// ! JSX : 
// ? => Writing Markup with JSX : JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information
export default function TodoList() {
    return (
      <>
        <h1>Hedy Lamarr's Todos</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve spectrum technology</li>
        </ul>
      </>
    );
}
    /*
     * 1. JSX wrapper [<> </>]
     * 2. DOM property : "className" instead of "class" 
     * 3. Corresponding closing tag : <img src="..." alt="..." /> 
    */

// * section - 04 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// ! JSX : 
// ? => JavaScript in JSX with curly braces : Incorporates JavaScript logic or reference a dynamic property inside that markup - 

 const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'crimson'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  
// * section - 04 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// * section - 05 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// ! Props : 
// ? => Passing props to a component : Pass (refer) JavaScript 
// ? Parent component ---> information(props) ---> Child component 

// ? => Passing props to a component : 
export default function Profile() {
    return (
      <Card>
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
    );
  }
  
  function Avatar({ person, size }) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  
  function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }

// * section - 05 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// * section - 05 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 


// * section - 06 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// ? => Conditional rendering : Conditional rendering in React is the process of rendering different content or components based on certain conditions. It is a fundamental concept in React that allows developers to create dynamic and interactive user interfaces.
/*
                if(__ && __) {
                    return component1
                } else {
                    return component2 
                }
*/
/*
? Example : For example, you might want to show a login form when a user is not authenticated, and a dashboard page once they have logged in.
* To achieve this, you can use conditional rendering to display the appropriate content based on the user's authentication status.

                if (user.authenticated == true) {
                    return dashboard;
                } else {
                    return login; 
                }

*/
// * Define a function that confirms the packaging of an item is done -  
function Item({ name, isPacked }) {
    return (
    // * if the item is packed, put a tick after it 
      <li className="item">
        {name} {isPacked && '✔'}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item
            isPacked={true}
            name="Space suit"
          />
          <Item
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
    );
  }

// ! .tsx : 
/*
import React from 'react';

interface ItemProps {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps): JSX.Element {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList(): JSX.Element {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}

*/

// * section - 06 : ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 


// * Key learning take-aways : 
/*
    ? 1. Component = JavaScript function sprinkled with markup 
    ? 2. <Profile />
         <Profile />
         <Profile /> 
        * function (Profile()) calling inside another function Gallery()  
    ? 3. Segregation of components : (single file with multiple components) -> (different files for different components) [export - import] 
    ? 4. JSX with curly braces : Keeping 'rendering logic' and 'content' in the same place
        ? Adding JavaScript logic or reference a dynamic property inside that markup
    ? 5. Parent component ---> information(props) ---> Child component 
    ? 6. What can be props ? => Objects, arrays, functions, and even JSX
    ? 7. function Card({ children }) : This syntax represents a special prop that is used to render the content that is passed to the component.
         In React, components can have child components, and the content passed to a component is referred to as its children.
    ? 8. Short-hand syntax for conditional rendering : 
         ! {name && <h1>Hello, {name}!</h1>}
         * "&&" - checks 'truthy' and 'falsy' values 
*/