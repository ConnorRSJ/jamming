import React from "react";
import styles from "./Track.module.css";

function Track(props) {
    function renderAction(props) {
        return <button className={styles.TrackAction}>{props.inRemoval ? "-" : "+"}</button>
    }


    return (
        <div className={styles.Track}>
            <div className={styles.TrackInformation}>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            {/* <button class="Track-action"><!-- + or - will go here --></button> */}
        </div>
    );
}

export default Track;