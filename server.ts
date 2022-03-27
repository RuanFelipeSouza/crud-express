import express from 'express';
import 'reflect-metadata';
import { RouterController } from './src/Router.controller';
import { createConnection, Connection } from 'typeorm';
import { CrudProvider } from './src/providers/Crud.provider';
export class Server {
  private app;
  private connection;
  private crudProvider;
  private routerController;
  constructor() {
    this.app = express();
    this.configuration();
    this.connection = this.connect();
    this.crudProvider = new CrudProvider();
    this.routerController = new RouterController(this.crudProvider);
    this.routes();
  }
  public configuration(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(express.json());
  }
  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`App running in port ${this.app.get('port')}`);
    });
  }
  public async connect(): Promise<Connection> {
    return await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'crud_express',
      synchronize: true,
      logging: false,
      entities: ['src/entities/**/*.ts'],
      migrations: ['src/migration/**/*.ts'],
      cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migration',
      },
    });
  }
  public async routes() {
    this.app.use('/api/crud', this.routerController.router);
  }
}
const server = new Server();
server.start();
