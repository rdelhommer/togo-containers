import { RestaurantRead, Enums } from 'express-react-ts-starter-shared';

export const staticData: RestaurantRead.IRestaurant[] = [{
  name: 'Garden Monsters',
  address: {
    street: '5029 SE Division St',
    city: 'Portland',
    state: 'OR',
    zip: '97202'
  },
  latLng: [45.505449, -122.610326],
  menuItems: [{
    name: 'Quinoa Avocado Bowl',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    },
    lid: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    }
  }, {
    name: 'Classic Melt',
    container: {
      disposalMethod: Enums.DisposalMethod.Recycle,
      material: Enums.ContainerMaterial.Metal,
      additionalInfo: 'Sticker goes in trash'
    }
  }, {
    name: 'Spicy Melt',
    container: {
      disposalMethod: Enums.DisposalMethod.Recycle,
      material: Enums.ContainerMaterial.Metal,
      additionalInfo: 'Sticker goes in trash'
    }
  }]
}, {
  name: 'Fressen Artisan Bakery and Cafe',
  address: {
    street: '7075 NE Glisan St',
    city: 'Portland',
    state: 'OR',
    zip: '97213'
  },
  latLng: [45.526742, -122.590075],
  menuItems: [{
    name: 'Breakfast Sandwich',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    }
  }, {
    name: 'Quiche',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    },
    extra: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.Plastic,
      additionalInfo: 'Salad Dressing Ramekin'
    }
  }, {
    name: 'Bavarian Croissant',
    container: {
      disposalMethod: Enums.DisposalMethod.Compost,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    }
  }]
}, {
  name: 'Red Sauce Pizza',
  address: {
    street: '4641 NE Fremont St',
    city: 'Portland',
    state: 'OR',
    zip: '97213'
  },
  latLng: [45.548433, -122.615538],
  menuItems: [{
    name: 'Pizza',
    container: {
      disposalMethod: Enums.DisposalMethod.Compost,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    }
  }]
}]