import React from "react";
import Tracklist from "../Tracklist/Tracklist"
import styles from "./SearchResults.module.css"

function SearchResults(props) {
    return (
        <div className={styles.SearchResults}>
            <h2>Results{props.userSearchResults.name}</h2>
            <Tracklist userSearchResults={props.userSearchResults} />
        </div>
    );
}

export default SearchResults;