import * as helmet from 'helmet';
import * as path from 'path';
import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import { config } from '../config/config';
import { logger } from '../lib/winston.lib';
import { authRouter } from './modules/auth.router';

class App {
  private express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  start() {
    const server = http.createServer(this.express);
    server.on('error', (err: Error) => {
      logger.error('Could not start server to due the following error')
      logger.error(err.message);
    });

    server.on('listening', () => {
      logger.info(`Started server at ${config.express.host}:${config.express.port}`)
    });

    server.listen(config.express.port, config.express.host);
  }

  private middleware(): void {
    // helmet
    this.express.use(helmet())

    // logger
    this.express.use(morgan('dev'));

    // body parser
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));

    // Add Authentication middleware here
  }

  private routes() {
    // static content first
    this.express.use('/', express.static(path.resolve('./dist/public')));

    // api stuff
    this.express.use('/api/auth', authRouter);

    // setup the fallback route last so we dont overwrite anything
    this.express.use('*', (req, resp) => {
      resp.sendFile(path.resolve('./server/dist/public/index.html'))
    })
  }
}

export const appRouter = new App();
