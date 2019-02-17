import { Request } from 'express';
import { IUserModel } from '../../data-model/user/user.model';

export interface ITypedRequest<TBody> extends Request {
  user?: IUserModel
  body: TBody
  query: TBody
}

export interface ISingleRecordRequest<TData = void, TBody = void> extends ITypedRequest<TBody> {
  data: TData
  params: { id: string }
}

export interface IRequestHandler<TRequestBody, TResponseData> {
  preValidate(req: ITypedRequest<TRequestBody>): Promise<ITypedRequest<TRequestBody>>
  validate(req: ITypedRequest<TRequestBody>): Promise<ITypedRequest<TRequestBody>>
  execute(req: ITypedRequest<TRequestBody>): Promise<TResponseData | TResponseData[]>
}
