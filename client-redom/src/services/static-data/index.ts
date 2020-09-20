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
}, {
  name: 'Sushi Sapporo',
  address: {
    street: '9738 SE Washington St',
    extra: 'Suite M',
    city: 'Portland',
    state: 'OR',
    zip: '97216'
  },
  latLng: [45.517550, -122.563075],
  menuItems: [{
    name: 'Sesame Balls',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    }
  }, {
    name: 'Gyoza',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    },
    extra: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.Plastic,
      additionalInfo: 'Ramekin'
    }
  }, {
    name: 'All Sushi',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.Plastic,
    },
    extra: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.Plastic,
      additionalInfo: 'Ramekin'
    }
  }]
}, {
  name: 'Malka',
  address: {
    street: '4546 SE Division St',
    city: 'Portland',
    state: 'OR',
    zip: '97206'
  },
  latLng: [45.505092, -122.615143],
  menuItems: [{
    name: 'I Have a Lot of Feelings',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    }
  }, {
    name: 'Bellflower Salad',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    },
    extra: {
      disposalMethod: Enums.DisposalMethod.Recycle,
      material: Enums.ContainerMaterial.Plastic,
      additionalInfo: 'Crispy Salad Toppers.  Lid is trash.  Ramekin for dressing is trash'
    }
  }, {
    name: 'Medusa',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    }
  }, {
    name: 'Kid Rice Bowl',
    container: {
      disposalMethod: Enums.DisposalMethod.Trash,
      material: Enums.ContainerMaterial.PaperOrPlantFiber,
    }
  }]
}]