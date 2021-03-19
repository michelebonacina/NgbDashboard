// librerie
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
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

// moduli applicativi
import { AppComponent } from './app.component';
import { HeaderComponent } from './comune/header/header.component';
import { SidebarComponent } from './comune/sidebar/sidebar.component';
import { CookieService } from 'ngx-cookie-service';

/**
 * factory per il caricamento dei file per la traduzione
 * @param http service http
 */
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
} // HttpLoaderFactory

// gestistra il locale per la lingua italiana
registerLocaleData(localeIt);

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [CookieService, { provide: LOCALE_ID, useValue: 'it-IT' }],
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
