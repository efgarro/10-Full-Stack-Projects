import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={(e) => {this.props.onSearch(e.target.value)}}/>
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

