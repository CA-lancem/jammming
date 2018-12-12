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
          name: '',
          artist: '',
          album: '',
          id: ''
        },
        {
          name: '',
          artist: '',
          album: '',
          id: ''
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

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
