import { DefaultConfig } from "../config/default";

export class ProductionConfig extends DefaultConfig {
  constructor() {
    super();

    // PRODUCTION CONFIG OVERRIDES
    this.express.host = process.env.HOST
    this.express.port = Number(process.env.PORT)
    
    this.logger.level = 'info';
  }
}
