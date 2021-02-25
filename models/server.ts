import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../routes/user';
import { dbConnection } from '../database/config';
class Server {
  private app: Application;
  private port: string;
  private userRoutePath: string;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';
    this.userRoutePath = '/api/users';
    this.conectarDB();
    this.middlewares();

    this.routes();
  }

  routes() {
    this.app.use(this.userRoutePath, userRoutes);
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Corriendo');
    });
  }
}

export default Server;
