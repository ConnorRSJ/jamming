import React, {useState} from "react";
import styles from "./SearchBar.module.css"

function SearchBar() {
    const [textValue, setTextValue] = useState('');


    return (
        <div className={styles.SearchBar}>
            <input
                placeholder="Enter A Song, Album, or Artist"
                id="textValue"
                name="textValue"
                type="text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            />
            <button className={styles.SearchButton}>SEARCH</button>
        </div>
    );
}

export default SearchBar;