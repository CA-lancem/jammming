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

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
