import { Enums } from "..";

export namespace GeneralDto {
  export interface ISuccessResponseBody<T = any> {
    data: T
  }

  export interface IErrorResponseBody {
    message: string
  }

  export interface IReadQuery {
    id: string
  }
}
