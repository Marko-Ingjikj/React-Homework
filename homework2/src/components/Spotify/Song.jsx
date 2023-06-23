import React from "react";

export default function Song({
  title,
  artistName,
  duration,
  inPlaylist,
  addToPlaylist,
  id,
}) {
  return (
    <li>
      <h3>Title: {title}</h3>
      <p>Artist: {artistName}</p>
      <p>Duration: {duration}s</p>
      <button
        disabled={inPlaylist}
        type="button"
        onClick={() => addToPlaylist(id)}>
        Add to playlist
      </button>
    </li>
  );
}
