import React, { Component } from "react";

//Class-Based Component
class SearchBar extends Component {
    render(){
        return <input onChange={this.onInputChange} />;
    }

    //Event Handler: Checks when text is changed
    onInputChange(event){
        console.log(event.target.value);
    }

    /*
    render(){
        return <input onChange={event => console.log(event.target.value)}
    }
    */
}

//Export SearchBar component
export default SearchBar;






/*
import React from "react";

//Class-Based Component
class SearchBar extends React.Component {
    render (){
        return <input />;
    }
}
*/

/*
import React from "react";

//Functional Component
const SearchBar = () => {
    return <input />;
};
*/

