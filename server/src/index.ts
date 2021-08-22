import express, { Request, Response } from 'express';
import helmet from 'helmet';

import { apples } from '@rangk/common/src/User';

const mansanas = apples;

const app = express();

app.use(helmet());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!\n');
});

app.listen(5000);
