import React, {useState} from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist"
import styles from "./App.module.css";

function App() {
    const [searchResults, setSearchResults] = useState([{   
        name: "example name 1",
        artist: "example artist 1",
        album: "example album 1",
        id: 1
    },
    {
        name: "example name 2",
        artist: "example artist 2",
        album: "example album 2",
        id: 2
    }]);

    return (
        <div>
            <h1>
                Ja<span className={styles.highlight}>mmm</span>ing
            </h1>
            <div className={styles.App}>
                <SearchBar/>

                <div className={styles.AppPlaylist}>
                    <SearchResults userSearchResults={searchResults} />
                    <Playlist/>
                </div>
            </div>
        </div>
    );
}

export default App;