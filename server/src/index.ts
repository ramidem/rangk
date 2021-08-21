import express, { Request, Response } from 'express';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!\n');
});

// test push
app.listen(5000, () => {
  // console.log('Served: localhost:5000');
});
