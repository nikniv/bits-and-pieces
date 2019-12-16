// https://open.spotify.com/playlist/37i9dQZF1E4EBdeEVqipSd

const songName = 'tracklist-name ellipsis-one-line';
const artistName = 'TrackListRow__artists ellipsis-one-line';
const albumName = 'TrackListRow__album ellipsis-one-line';

let songs;
let artists;
let albums;

// const download = (file) => {
//   const a = document.createElement("a"),
//   const url = URL.createObjectURL(file);
//   a.href = url;
//   a.download = 'playlistString.txt';
//   document.body.appendChild(a);
//   a.click();
//   setTimeout(function() {
//     document.body.removeChild(a);
//     window.URL.revokeObjectURL(url);  
//   }, 0); 
// }

const playlist = () => {
  const merged = songs.map((song, index) => {
    return {
      track: index + 1,
      song,
      artist: artists[index], 
      album: albums[index]
    };
  });
  return merged;
}

const playlistStringArray = () => {
  const merged = songs.map((song, index) => {
    const artist = artists[index]; 
    const album = albums[index];
    return `#${index + 1}: ${artist} - ${song} [${album}]`;
  });
  return merged;
}

const playlistStringTemplate = () => {
	let str = '';
  songs.forEach((song, index) => {
    const artist = artists[index]; 
    const album = albums[index];
    str += `#${index + 1}: ${artist} - ${song} [${album}]\n`;
  });
  return str;
}

window.onload = (event) => {
  songs = [...document.getElementsByClassName(songName)].map(elem => elem.innerText);
  artists = [...document.getElementsByClassName(artistName)].map(elem => elem.innerText);
  albums = [...document.getElementsByClassName(albumName)].map(elem => elem.innerText);

  const playlistString = playlistStringTemplate();

  const file = new File([playlistString], 'playlistString.txt', {
    type: 'text/plain',
  });
  console.log(playlistString);
  // window.open(URL.createObjectURL(file));
  // download(file);

  // const a = document.createElement("a"),
  // const url = URL.createObjectURL(file);
  // console.log(url)
  // a.href = url;
  // a.download = 'playlistString.txt';
  // document.body.append(a);
  // a.click();
  // setTimeout(function() {
  //   document.body.removeChild(a);
  //   window.URL.revokeObjectURL(url);  
  // }, 0); 
};
