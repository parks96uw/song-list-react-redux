// Action creator

// Export the function to be used
// Use a named export -- which allows for many exports
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};
