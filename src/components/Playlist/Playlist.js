import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist() {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} />
            <Tracklist />
            <button className="PlaylistSave">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;