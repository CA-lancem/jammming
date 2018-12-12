import React, { Component } from 'react';
// eslint-disable-next-line
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: 'Hello World',
      playlistTracks: [
        {
          name: 'Stronger',
          artist: 'Britney Spears',
          album: 'Oops!... I Did It Again',
          id: '0'
        },
        {
          name: 'So Emotional',
          artist: 'Whitney Houston',
          album: 'Whitney',
          id: '1'
        },
        {
          name: '',
          artist: '',
          album: '',
          id: ''
        }
      ],
      searchResults: [
        {
          name: 'Purple Rain',
          artist: 'Jimi Hendrix',
          album: 'Seattle',
          id: '0'
        },
        {
          name: 'Purple People Eater',
          artist: 'Unknown',
          album: 'Unknown too',
          id: '1'
        },
        {
          name: '',
          artist: '',
          album: '',
          id: ''
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if 
    (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    else {
      this.state.playlistTracks.push(track);

      this.addTrack = this.addTrack.bind(this);
    }
  }

  removeTrack(track) {
      var tracks = this.state.playlistTracks;
      const result = tracks.filter(savedTrack => savedTrack.id === track.id);
      this.setState({
        playlistTracks: result
      });

  }

  savePlaylist(playlistTracks) {
    const trackURIs = [];
  }

  search(term) {
    console.log(term);
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }
  

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}
              onSearch={this.search} />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
