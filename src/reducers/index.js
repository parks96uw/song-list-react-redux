// Import Redux
import { combineReducers } from 'redux';

// Reducers
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '3:20' },
        { title: 'All Star', duration: '2:33' },
        { title: 'I Want It That Way', duration: '1:45' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

// Export the reducers
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});