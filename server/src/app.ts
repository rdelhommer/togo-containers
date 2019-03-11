require('dotenv').config()

import { appRouter } from './api/express.config';

async function gogo() {
  await appRouter.start()
}

gogo()
