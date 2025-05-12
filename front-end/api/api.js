import axios from "axios";

// const URL = process.env.NODE_ENV === "development"
//   ? "http://localhost:3000/api"
//   : process.env.URL;

const URL = process.env.URL;

const responseArtists = await axios.get(`${URL}/artists`);
export const artistsArray = responseArtists.data;

const responseSongs = await axios.get(`${URL}/songs`);
export const songsArray = responseSongs.data;