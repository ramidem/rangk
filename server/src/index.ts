import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!\n');
});

app.listen(5000, () => {
  // console.log('Served: localhost:5000');
});
