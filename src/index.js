import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component which should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

//Take the component's generate HTML and display it to the DOM
ReactDOM.render(<App />, document.querySelector(".container"));