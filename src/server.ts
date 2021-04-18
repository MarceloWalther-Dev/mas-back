import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const port = 8080;

app.listen(port, ()=> console.log(`Servidor rodando com sucesso na porta ${port}`));