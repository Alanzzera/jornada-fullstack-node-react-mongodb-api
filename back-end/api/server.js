import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors()); //Middleware

app.get('/', (request, response)=> {
    response.send("Rotas disponiveis '/artists' e '/songs'");
});

app.get('/artists', async (request, response)=> {
    response.send(await db.collection('artists').find({}).toArray());
});

app.get('/songs', async (request, response)=> {
    response.send(await db.collection('songs').find({}).toArray());
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});