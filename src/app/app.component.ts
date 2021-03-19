// librerie
import { Component } from '@angular/core';

@Component({
  selector: 'ngb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidebarVisibile = false;
  titolo = 'NgbDashboard';

  /**
   * intercetta il toggle sulla sidebar
   * @param $event evento sollevato dal toggle sulla sidebar
   */
  onSidebarToggle($event: boolean) {
    this.sidebarVisibile = $event;
  } // onSidebarToggle
} // AppComponent
