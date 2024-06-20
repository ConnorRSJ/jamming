import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

function Playlist() {
    return (
        <div className={styles.Playlist}>
            <input defaultValue={"New Playlist"} />
            <Tracklist />
            <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;