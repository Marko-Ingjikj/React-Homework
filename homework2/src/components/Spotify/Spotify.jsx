import React from "react";
import Songs from "./Songs";
import Playlist from "./Playlist";
import { useState } from "react";

export default function Spotify() {
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "In the club",
      artistName: "50 cent",
      duration: 193,
      inPlaylist: false,
    },
    {
      id: 2,
      title: "Odi zvezdo",
      artistName: "Naum Petreski",
      duration: 200,
      inPlaylist: false,
    },
    {
      id: 3,
      title: "Sistem te laze",
      artistName: "Beogradski sindikat",
      duration: 250,
      inPlaylist: false,
    },
    {
      id: 4,
      title: "Harder than you think",
      artistName: "Public Enemy",
      duration: 150,
      inPlaylist: false,
    },
    {
      id: 5,
      title: "Single ladies",
      artistName: "Beyonce",
      duration: 296,
      inPlaylist: false,
    },
    {
      id: 6,
      title: "Shut up and drive",
      artistName: "Rihanna",
      duration: 178,
      inPlaylist: false,
    },
  ]);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (id) => {
    const songToAdd = songs.find((s) => s.id === id);

    songToAdd.inPlaylist = true;

    setPlaylist((prevPlaylist) => [...prevPlaylist, songToAdd]);
  };

  const removeFromPlaylist = (id) => {
    const songToRemove = songs.find((s) => s.id === id);

    songToRemove.inPlaylist = false;

    setPlaylist((prevPlaylist) => prevPlaylist.filter((s) => s.id !== id));
  };

  return (
    <div className="wrapper">
      <Songs songs={songs} addToPlaylist={addToPlaylist} />
      <Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist} />
    </div>
  );
}
