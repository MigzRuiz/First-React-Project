import React from 'react';              //Used to convert JSX
import ReactDOM from 'react-dom';       //Used to display JSX in the DOM

//Import SearchBar
import SearchBar from "./components/search_bar";

//API Key
const API_KEY = "";


//Create a new component which should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//Take the component's generate HTML and display it to the DOM
ReactDOM.render(<App />, document.querySelector(".container"));