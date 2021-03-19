import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faChartArea as fasChartArea,
  faChartLine as fasChartLine,
  faFileAlt as fasFileAlt,
  faLayerGroup as fasLayerGroup,
  faShoppingCart as fasShoppingCart,
  faTachometerAlt as fasTachometerAlt,
  faStar as fasStar,
  faUserFriends as fasUserFriends,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconModule {
  /**
   * crea un nuovo modulo
   * vengono inizializzate le icone disponibili per tutta l'applicazone
   * @param library libreria per l'inizializzazione delle icone
   */
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(
      fasChartArea,
      fasChartLine,
      fasFileAlt,
      fasLayerGroup,
      fasShoppingCart,
      fasStar,
      fasTachometerAlt,
      fasUserFriends
    );
  } // constructor
} // IconModule
