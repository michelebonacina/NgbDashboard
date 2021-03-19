// librerie
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// moduli applicativi
import { AppComponent } from './app.component';
import { HeaderComponent } from './comune/header/header.component';
import { SidebarComponent } from './comune/sidebar/sidebar.component';
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
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
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
  }
} // AppModule
