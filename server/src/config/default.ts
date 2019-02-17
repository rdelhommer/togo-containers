import { IConfig, IExpressConfig, ILoggerConfig } from "../config/config";

export class DefaultConfig implements IConfig {
  express: IExpressConfig
  logger: ILoggerConfig

  constructor() {
    this.express = {
      host: 'localhost',
      port: 3030,
      public: '../public/',
      maxResponseLength: 100
    }

    this.logger = {
      level: 'build'
    }
  }
}
