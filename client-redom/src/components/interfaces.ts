import { RedomComponent } from "redom";

export interface IRedomComponent extends RedomComponent {
  update?<TData>(item: any, index: number, data: TData, context?: any): void;
}