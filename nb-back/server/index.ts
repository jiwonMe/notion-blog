import type { Request, Response, NextFunction } from 'express';
import express from 'express';
import cors from 'cors';

import { getPageList, getPageContent } from '../src';

const server = express();

const port = process.env.PORT || 8800;

server.use(cors());

const wrapAsync = fn => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch(next);
};

server.listen(port, () => {
  console.log(`[server] server started listening on http://localhost:${port}`);
});

server.get('/api/v1/getPageList', wrapAsync(getPageList));

server.get('/api/v1/getPageContent/:pageId', wrapAsync(getPageContent));
