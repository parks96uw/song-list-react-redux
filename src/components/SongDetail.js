import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    // check if song is selected
    if (!song) {
        return <div>Select a song!</div>
    }
    return (
        <div>
            <h3>Details for: </h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>
    )
}

// Take our state object and return them as props in our component
const mapStateToProps = (state) => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);