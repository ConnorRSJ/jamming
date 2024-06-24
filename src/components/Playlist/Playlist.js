import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

function Playlist(props) {
    function handleNameChange({target}) {
        props.onNameChange(target.value);
    }

    return (
        <div className={styles.Playlist}>
            <input
                type="text"
                defaultValue={props.playlistName}
                onChange={handleNameChange}
            />
            <Tracklist
                userSearchResults={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className={styles.PlaylistSave} onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;