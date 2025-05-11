import { db } from "./connect.js";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";

const newArtistArray = artistArray.map((currentArtistsObg) => {
    const newArtistsObj = {...currentArtistsObg};
    delete newArtistsObj.id;
    return newArtistsObj;
});
const newSongsArray = songsArray.map((currentSongsObg) => {
    const newSongObj = {...currentSongsObg};
    delete newSongObj.id;
    return newSongObj;
});

const responseArtists = await db.collection('artists').insertMany(newArtistArray);
console.log(responseArtists);

const responseSongs = await db.collection('songs').insertMany(newSongsArray);
console.log(responseSongs);