// * => Creating and nesting components :

/*
    React app : accumulation of components 

    ? Component ? => React Components are JavaScript functions that return markup
    -> Components have their own 'logic' and 'appearance'. 
    -> Components can be as small as a button, or as large as an entire page. 
*/

// * Creating a component : React_Component_Button // *1
function React_Component_Button() { 
  return <button>Press me!</button>; // return ()
}

// * Nesting the component : One component inside another component [nesting functions]
export default function React_Principal_Component() {
  return (
    <div>
      <h1>Application : Title</h1>
      <React_Component_Button />
    </div>
  );
}

// * Have a look at the result : 
function React_Component_Button_Submit() {
    return  (
        <button>Submit the form!</button>
    );
}

export default function React_Application() {
    return (
        <div>
            <h2>Fill up this form</h2>

            <Form_Fill_Up /> 

            <React_Component_Button_Submit />
        </div>  
    );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// * Adding styles : 
<img className="avatar" />

// * In a separated css file - write the css rules : 
/*
? .avatar {
?   border-radisu : 50%; 
? }
*/

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 

// * Displaying data : Embed variable(s) to your code and display it to the user - 
return (
    <h1>{user.name}</h1>
);

return (
    <img className="avatar" src={user.imageUrl} />
);


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ // 


/*
=> Key take-aways : 
    *1 -> React_Component_Button : starts with a capital letter - that's how you know that it's a React component (HTML tags must be lowercase)
       -> <br /> | <React_Component /> : markup with JSX 
*/