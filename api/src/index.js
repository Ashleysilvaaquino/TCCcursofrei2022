import 'dotenv/config'
import admcontroller from './controller/admcontroller.js'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

// liberar arquivos da storage
server.use('/storage/capalivros', express.static('storage/capalivros'));


// configuração dos endpoints
server.use(admcontroller);


server.listen(process.env.PORT, () => console.log(`API online na porta ${process.env.PORT}`))