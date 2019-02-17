import { Enums, UserRequests } from "express-react-ts-starter-shared";
import { ModuleExecutor } from "../module.executor";
import { Router } from "express";
import { getUserHandler } from "../../application/request-handlers/auth/get-user.handler";

const executor = new ModuleExecutor();
const router = Router();

router
  .get('/get-user', executor.execute(
    getUserHandler,
    [Enums.UserRoles.Admin]
  ))
  .get('/public/get-user', executor.execute(
    getUserHandler
  ))

export const authRouter = router;
