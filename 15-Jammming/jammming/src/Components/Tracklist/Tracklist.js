import React from "react";
import { Track } from "../Track/Track";
import "./Tracklist.css";

export class Tracklist extends React.Component {
  render() {
    console.log(this.props.tracks);
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => {
          return (
            <Track
              track={track}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              key={track.id}
              isRemoval={this.props.isRemoval}
            />
          );
        })}

        {/* <!-- You will add a map method that renders a set of Track components  --> */}
      </div>
    );
  }
}
