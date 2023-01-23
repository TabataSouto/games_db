import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import httpErrorMiddleware from './middlewares/httpErrorMiddleware';
import routerGames from './routes/games.router';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const acessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    }

    this.app.use(cors())
    this.app.use(express.json());
    this.app.use(acessControl);
    this.app.use(routerGames);
    this.app.use(httpErrorMiddleware)
  };

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}