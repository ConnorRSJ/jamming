import React, {useState} from "react";
import styles from "./SearchBar.module.css"

function SearchBar() {
    const [textValue, setTextValue] = useState('');


    return (
        <div className={styles.searchBar}>
            <input 
                id="textValue"
                name="textValue"
                type="text"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            />
            <button type='submit'>Search</button>
        </div>
    );
}

export default SearchBar;