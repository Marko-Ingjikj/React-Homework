import React from "react";
import Song from "./Song";

// export default class Songs extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
// return (
//   <div className="songs">
//     <h2>Songs</h2>
//     <ul>
//       {this.props.songs.map((song) => (
//         <Song
//           key={song.id}
//           {...song}
//           addToPlaylist={this.props.addToPlaylist}
//         />
//       ))}
//     </ul>
//   </div>
// );
//   }
// }

export default function Songs({ songs, addToPlaylist }) {
  return (
    <div className="songs">
      <h2>Songs</h2>
      <ul>
        {songs.map((song) => (
          <Song
            key={song.id}
            id={song.id}
            title={song.title}
            artistName={song.artistName}
            duration={song.duration}
            inPlaylist={song.inPlaylist}
            addToPlaylist={addToPlaylist}
          />
        ))}
      </ul>
    </div>
  );
}
