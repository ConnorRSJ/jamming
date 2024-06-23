import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

function Playlist(props) {
    return (
        <div className={styles.Playlist}>
            <input
                type="text"
                defaultValue={props.playlistName} />
            <Tracklist
                userSearchResults={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;