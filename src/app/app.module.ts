// librerie
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { CookieService } from 'ngx-cookie-service';

// moduli applicativi
import { IconModule } from './@core/icon/icon.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comune/header/header.component';
import { SidebarComponent } from './comune/sidebar/sidebar.component';

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
    IconModule,
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
} // AppModule
