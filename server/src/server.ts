import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



// GET, POST, PUT, PATCH, DELET

// GET = Buscar informações
// POST = Cadastrar Info
// PUT = Atualizar info de uma entidade
// PATCH = Atualizar uma info unica de uma entidade
// DELETE = Deletar uma info



app.listen(3333, () => {
    console.log('HTTP server running!');
});