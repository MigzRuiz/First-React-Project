import React, {Component} from "react";             //Used to convert JSX
import ReactDOM from "react-dom";                   //Used to display JSX in the DOM
import YTSearch from "youtube-api-search";          //Access to the search package
import SearchBar from "./components/search_bar";    //Import search_bar.js
import VideoList from "./components/video_list";    //Import video_list.js
import VideoDetail from "./components/video_detail";//Import video_detail.js

//API Key
const API_KEY = "";

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: "How to find a girlfriend"}, videos => {

            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })

            //this.setState({videos}); //If Key and Properties are the same
            //this.setState({ videos: videos });
        })
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

//Take the component's generate HTML and display it to the DOM
ReactDOM.render(<App />, document.querySelector(".container"));