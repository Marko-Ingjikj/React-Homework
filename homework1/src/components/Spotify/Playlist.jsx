import React from "react";

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  calculateDuration = () => {
    let totalDuration = 0;
    this.props.playlist.forEach((song) => {
      totalDuration += song.duration;
    });
    return totalDuration;
  };

  render() {
    const duration = this.calculateDuration();
    return (
      <div>
        <h2>Playlist</h2>
        <h4>Duration: {duration}s</h4>
        <ul>
          {this.props.playlist.map((song) => (
            <li key={`song-${song.id}`}>
              <p>{song.title}</p>
              <button
                onClick={() => this.props.removeFromPlaylist(song.id)}
                type="button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
