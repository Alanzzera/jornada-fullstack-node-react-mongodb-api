import axios from "axios";
import "dotenv/config";

const NODE_ENV = ProcessingInstruction.env.NODE_ENV

// const URL = "http://localhost:3000/api";
const URL = ProcessingInstruction.env.URL;

const responseArtists = await axios.get(`${URL}/artists`);
export const artistsArray = responseArtists.data;

const responseSongs = await axios.get(`${URL}/songs`);
export const songsArray = responseSongs.data;