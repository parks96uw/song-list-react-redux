import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    // Receives the props data with redux as its source
    // Map each song item to it's own JSX element
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

// Take our state object and return them as props in our component
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

// Wrap our SongList with the connect function
// selectSong also provides our Action Creator
export default connect(mapStateToProps, { selectSong })(SongList);