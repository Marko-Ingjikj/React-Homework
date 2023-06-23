import React, { useEffect, useState } from "react";

export default function Playlist({ playlist, removeFromPlaylist }) {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let totalDuration = 0;
    playlist.forEach((s) => (totalDuration += s.duration));
    setDuration(totalDuration);
  });

  return (
    <div>
      <h2>Playlist</h2>
      <h4>Duration: {duration}s</h4>
      <ul>
        {playlist.map((song) => (
          <li key={`song-${song.id}`}>
            <p>{song.title}</p>
            <button onClick={() => removeFromPlaylist(song.id)} type="button">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
