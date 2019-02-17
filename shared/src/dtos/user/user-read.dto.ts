import { Enums } from "../../enums/enums";

export namespace UserRead {
  export interface IUser {
    username: string
    firstName: string
    lastName: string
    roles: Enums.UserRoles[]
  }
}
