import * as winston from 'winston';
import { DefaultConfig } from '../config/default';
import { ProductionConfig } from '../config/production';

export interface IExpressConfig {
  host: string
  port: number
  public: string
  maxResponseLength: number
}

export interface ILoggerConfig {
  level: winston.NPMLoggingLevel | 'build';
}

export interface IConfig {
  express: IExpressConfig
  logger: ILoggerConfig
}

let EnvConfig = DefaultConfig;
switch (process.env.NODE_ENV) {
  case 'production':
    EnvConfig = ProductionConfig
    break;
  default:
    break;
}

export const config: IConfig = new EnvConfig();
