import { Aurelia, PLATFORM } from 'aurelia-framework'

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()

  aurelia.start()
    .then(() => {
      aurelia.setRoot(PLATFORM.moduleName('app'))
    });
}