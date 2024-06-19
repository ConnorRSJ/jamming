import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist"
import styles from "./App.module.css";

function App() {
    return (
        <div>
            <h1>
                Ja<span className={styles.highlight}>mmm</span>ing
            </h1>
            <div className={styles.App}>
                <SearchBar/>

                <div className={styles.AppPlaylist}>
                    <SearchResults/>
                    <Playlist/>
                </div>
            </div>
        </div>
    );
}

export default App;