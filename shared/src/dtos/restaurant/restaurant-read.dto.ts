import { Enums } from "../../enums/enums";

export namespace RestaurantRead {
  export interface IAddress {
    street: string
    extra?: string
    city: string
    state: string
    zip: string
  }

  export interface IContainerData {
    disposalMethod: Enums.DisposalMethod
    material: Enums.ContainerMaterial
    isReusable?: boolean
    additionalInfo?: string
  }

  export interface IMenuItem {
    name: string
    container: IContainerData
    lid?: IContainerData
    extra?: IContainerData
  }

  export interface IRestaurant {
    name: string

    latLng: [number, number]
    address: IAddress

    menuItems: IMenuItem[] 

    uberEatsId?: string
    grubhubId?: string
  }
}
