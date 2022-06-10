import React from "react";
import "./Track.css";

export class Track extends React.Component {
  constructor(props) {
    super(props);
    // this.addTrack = this.addTrack.bind(this);
  }
  // addTrack() {
  //   console.log("onclick");
  //   this.props.onAdd(this.props.track);
  // }
  // this.props.isRemoval
  renderAction() {
    console.log("Hellow");
    console.log(this.props);
    if (this.props.isRemoval) {
      return (
        <button
          className="Track-action"
          onClick={() => this.props.onAdd(this.props.track)}
        >
          +
        </button>
      );
    } else {
      return (
        <button
          className="Track-action"
          onClick={() => this.props.onRemove(this.props.track)}
        >
          -
        </button>
      );
    }
  }

  render() {
    console.log(this.props.track);
    let { name, artist, album } = this.props.track;
    console.log(name);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{name}</h3>
          <p>
            {artist} | {album}
          </p>
        </div>
        {this.renderAction()}
        {/* <button
          className="Track-action"
          onClick={() => {
            console.log("hi");
            this.props.onAdd(this.props.track);
          }}
        >
          +
        </button> */}
      </div>
    );
  }
}
