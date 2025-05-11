import { MongoClient }  from "mongodb";
import dotenv from "dotenv";

// Carrega as variáveis do .env
dotenv.config();

const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

export const db = client.db("spotify");

// const artistCollection = await db.collection('artits').find({}).toArray();
// const songCollection = await db.collection('songs').find({}).toArray();
// console.log(artistCollection)
// console.log(songCollection)