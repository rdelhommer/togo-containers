import { UserRequests } from "express-react-ts-starter-shared";
import { logger } from "../../../lib/winston.lib";
import { IRequestHandler, ITypedRequest } from "../request-handler";
import { IUserModel } from "../../../data-model/user/user.model";

class GetUserHandler implements IRequestHandler<UserRequests.IGetSingle, IUserModel> {
  preValidate(req: ITypedRequest<UserRequests.IGetSingle>): Promise<ITypedRequest<UserRequests.IGetSingle>> {
    // Get any assets needed to perform validation and execute the handler here
    return Promise.resolve(req);
  }

  validate(req: ITypedRequest<UserRequests.IGetSingle>): Promise<ITypedRequest<UserRequests.IGetSingle>> {
    // Perform validation here
    return Promise.resolve(req)
  }

  execute(req: ITypedRequest<UserRequests.IGetSingle>): Promise<IUserModel> {
    logger.debug(`Getting example user`)
    logger.debug(`Id could be on the query or the body - query: ${req.query.id} - body: ${req.body.id}`)

    return Promise.resolve(<IUserModel>{
      id: 'asdf',
      firstName: 'Foo',
      lastName: 'Bar',
      created: new Date(),
      updated: null,
      userName: 'FooBar'
    });
  }
}

export const getUserHandler = new GetUserHandler();
