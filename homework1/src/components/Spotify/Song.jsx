import React from "react";
import PropTypes from "prop-types";

export default class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <h3>Title: {this.props.title}</h3>
        <p>Artist: {this.props.artistName}</p>
        <p>Duration: {this.props.duration}s</p>
        <button
          type="button"
          onClick={() => this.props.addToPlaylist(this.props.id)}>
          Add to playlist
        </button>
      </li>
    );
  }
}

// Song.propTypes = {
//   id: PropTypes.number,
//   title: PropTypes.string,
//   artistName: PropTypes.string,
//   duration: PropTypes.number,
//   addToPlaylist: PropTypes.func,
// };
