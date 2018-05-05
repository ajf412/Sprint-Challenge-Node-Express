// DEPENDENCIES
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const server = express();


// ROUTER SETUP
import projectRoutes from './routers/projectRoutes';
import actionRoutes from './routers/actionRoutes';

// USE MIDDLEWARE
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

// GET SETUP
server.get('/', (req, res) => {
  res.json({ api: 'running' });
});

// START SERVER
const port = 5000;
server.listen(port, () => console.log(`\n== API Running on port ${port} ==\n`));
