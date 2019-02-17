import { Enums } from "express-react-ts-starter-shared";

export interface IUserModel {
  id: string
  userName: string
  firstName: string
  lastName: string
  updated: Date
  created: Date
  roles: string[]
}
