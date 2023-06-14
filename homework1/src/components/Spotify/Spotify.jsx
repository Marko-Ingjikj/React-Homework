import React from "react";
import Songs from "./Songs";
import Playlist from "./Playlist";

export default class Spotify extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [
        { id: 1, title: "In the club", artistName: "50 cent", duration: 193 },
        {
          id: 2,
          title: "Odi zvezdo",
          artistName: "Naum Petreski",
          duration: 200,
        },
        {
          id: 3,
          title: "Sistem te laze",
          artistName: "Beogradski sindikat",
          duration: 250,
        },
        {
          id: 4,
          title: "Harder than you think",
          artistName: "Public Enemy",
          duration: 150,
        },
        { id: 5, title: "Single ladies", artistName: "Beyonce", duration: 296 },
        {
          id: 6,
          title: "Shut up and drive",
          artistName: "Rihanna",
          duration: 178,
        },
      ],
      playlist: [],
      duration: 0,
    };
  }

  addToPlaylist(id) {
    const song = this.state.songs.find((s) => s.id === id);
    this.setState((prevState) => ({
      playlist: [...prevState.playlist, song],
    }));
  }

  removeFromPlaylist(id) {
    const song = this.state.songs.find((s) => s.id === id);
    this.setState((prevState) => ({
      playlist: prevState.playlist.filter((s) => s.id != id),
    }));
  }

  render() {
    return (
      <div className="wrapper">
        <Songs
          songs={this.state.songs}
          addToPlaylist={this.addToPlaylist.bind(this)}
        />
        <Playlist
          playlist={this.state.playlist}
          removeFromPlaylist={this.removeFromPlaylist.bind(this)}
        />
      </div>
    );
  }
}
