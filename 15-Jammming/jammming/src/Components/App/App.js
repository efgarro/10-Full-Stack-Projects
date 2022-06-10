import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults: [
        {
          name: "Tiny Dancer",
          artist: "Elton John",
          album: "Madman",
          id: "2TVxnKdb3tqe1nhQWwwZCO",
        },
        {
          name: "Tiny Dancer",
          artist: "Tim McGraw",
          album: "Love Story",
          id: "6qaPwYZAJgvyf6l7f7rfUo",
        },
        {
          name: "Tiny Dancer",
          artist: "Raven",
          album: "Tiny Thing",
          id: "5nwjcZ87CGNRiO98nFKdOD",
        },
      ],
      playlistName: "Bella's Favs",
      playlistTracks: [
        {
          name: "Stronger",
          artist: "Britney Spears",
          album: "Did it Again",
          id: "1nInOsHbtotAmEOQhtvnzP",
        },
        {
          name: "So Emotional",
          artist: "Whitney Houston",
          album: "Whitney",
          id: "2tUBqZG2AbRi7Q0BIrVrEj",
        },
        {
          name: "It's Ok",
          artist: "Whitney Houston",
          album: "My Love",
          id: "4eHbdreAnSOrDDsFfc4Fpm",
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    } else {
      console.log("hi");
      const newPlaylistTracks = [...this.state.playlistTracks];
      newPlaylistTracks.push(track);
      this.setState({ playlistTracks: newPlaylistTracks });
    }
  }
  removeTrack(track) {
    const newPlaylistTracks = this.state.playlistTracks.filter(
      (savedTrack) => savedTrack.id !== track.id
    );
    this.setState({ playlistTracks: newPlaylistTracks });
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName: newName });
  }
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.reduce((arrURIs, track) => {
      arrURIs.push(`spotify:track:${track.id}`);
      return arrURIs;
    }, []);
    console.log(trackURIs);
  }
search(term) {
console.log(term);
}

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              SearchResults={this.state.SearchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
