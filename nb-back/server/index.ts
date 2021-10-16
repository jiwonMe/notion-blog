import express from 'express';
import cors from 'cors';

const server = express();

const port = process.env.PORT;

server.use(cors());

server.listen(port, () => {
  console.log(`[server] server started listening on http://localhost:${port}`);
});
