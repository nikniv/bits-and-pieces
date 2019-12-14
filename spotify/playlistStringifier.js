// https://open.spotify.com/playlist/37i9dQZF1E4EBdeEVqipSd

const songName = 'tracklist-name ellipsis-one-line';
const artistName = 'TrackListRow__artists ellipsis-one-line';
const albumName = 'TrackListRow__album ellipsis-one-line';

let songs;
let artists;
let albums;

const playlist = () => {
  const merged = songs.map((song, index) => {
    return { 
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
    return `${artist} - ${song} [${album}]`;
  });
  return merged;
}

const playlistStringTemplate = () => {
	let str = '';
  songs.forEach((song, index) => {
    const artist = artists[index]; 
    const album = albums[index];
    str += `${artist} - ${song} [${album}]\n`;
  });
  return str;
}

window.onload = (event) => {
  songs = [...document.getElementsByClassName(songName)].map(elem => elem.innerText);
  artists = [...document.getElementsByClassName(artistName)].map(elem => elem.innerText);
  albums = [...document.getElementsByClassName(albumName)].map(elem => elem.innerText);

  console.log(playlistStringTemplate());
};
