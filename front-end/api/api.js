import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.NODE_ENV === "development"
  ? "http://localhost:3000/api"
  : process.env.URL;

const responseArtists = await axios.get(`${URL}/artists`);
export const artistsArray = responseArtists.data;

const responseSongs = await axios.get(`${URL}/songs`);
export const songsArray = responseSongs.data;