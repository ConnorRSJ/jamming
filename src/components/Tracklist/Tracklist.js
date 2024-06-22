import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css"

function Tracklist({userSearchResults}) {

    return (
        <div className={styles.Tracklist}>
            {userSearchResults?.map(track => (<Track track={track} key={track.id} />))}
        </div>
    );
}

export default Tracklist;