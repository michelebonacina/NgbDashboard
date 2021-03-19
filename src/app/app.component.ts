// librerie
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'mbd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidebarVisibile = false;
  titolo = 'NgbDashboard';

  /**
   * crea un nuovo componente
   * @param {TranslateService} translateService gestore delle traduzioni
   * @param {CookieService} cookieService gestore del cookie
   */
  constructor(
    private translateService: TranslateService,
    private cookieService: CookieService
  ) {
    // inizializza il service di traduzione
    this.translateService.addLangs(['en', 'it']);
    this.translateService.setDefaultLang('it');
    this.translateService.use(this.translateService.getBrowserLang());
    // imposta il cookie con la lingua
    this.cookieService.set('abt-lang', this.translateService.getBrowserLang());
  } // constructor

  /**
   * intercetta il toggle sulla sidebar
   * @param $event evento sollevato dal toggle sulla sidebar
   */
  onSidebarToggle($event: boolean) {
    this.sidebarVisibile = $event;
  } // onSidebarToggle
} // AppComponent
