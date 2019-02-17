import { Request, Response, NextFunction } from 'express';
import { HandlerError } from '../api/handler.error';
import { logger } from '../lib/winston.lib';
import { GeneralDto, Enums } from 'express-react-ts-starter-shared';
import { ITypedRequest, IRequestHandler } from '../application/request-handlers/request-handler';

export interface IResponseMask {
  roles: Enums.UserRoles[],
  Mask: new () => any
}

export class ModuleExecutor {
  private handleError(err: HandlerError): { code: number, message: string } {
    if (err.constructor === HandlerError) {
      // Special handling for our custom error type
      return {
        code: err.httpCode || 500,
        message: err.message
      }
    }

    // Log and send 500 if the error was unexpected
    logger.error(err.message)
    logger.error(err.stack)

    return {
      code: 500,
      message: 'An error occurred'
    }
  }

  execute<TRequestBody, TResponseData = void>(
    handler: IRequestHandler<TRequestBody, TResponseData>,
    allowedRoles: Enums.UserRoles[] = []
  ) {
    let allowedRolesMap = {}
    allowedRoles.forEach(x => allowedRolesMap[x] = true)

    return (req: ITypedRequest<any>, res: Response) => {
      try {
        // 403 if allowedRoles are specified and there is no user or the user's roles are not one of the allowedRoles
        if (allowedRoles.length > 0 && (!req.user || !req.user.roles.some(x => allowedRolesMap[x]))) {
          throw new HandlerError(403, 'Forbidden')
        }

        // validate and handle the request
        handler.preValidate(req)
          .then(req => handler.validate(req))
          .then(req => handler.execute(req))
          .then(responseData => res.json(responseData))
          .catch((err: HandlerError) => {
            let responseCtx = this.handleError(err);
            return res.status(responseCtx.code).send({ message: responseCtx.message });
          })
      } catch (err) {
        let responseCtx = this.handleError(err);
        return res.status(responseCtx.code).send({ message: responseCtx.message });
      }
    }
  }
}
