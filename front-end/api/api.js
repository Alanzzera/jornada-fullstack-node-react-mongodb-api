import axios from "axios";

const URL = import.meta.env.VITE_URL;

const responseArtists = await axios.get(`${URL}/artists`);
export const artistsArray = responseArtists.data;

const responseSongs = await axios.get(`${URL}/songs`);
export const songsArray = responseSongs.data;