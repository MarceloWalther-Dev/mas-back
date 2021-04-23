import express from 'express';
import './database';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 8080;

app.listen(port, ()=> console.log(`Servidor rodando com sucesso na porta ${port}`));