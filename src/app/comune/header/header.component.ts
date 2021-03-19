// librerie
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private sidebarVisibile = false;

  @Output() sidebarToggleChanged = new EventEmitter<boolean>();

  /**
   * crea un nuovo componente
   */
  constructor() {} // constructor

  /**
   * inizializza il componente
   */
  ngOnInit(): void {} // ngOnInit

  /**
   * intercetta il click sul toggle della sidebar
   * emette un evento con il nuovo stato della sidebar
   */
  onToggle() {
    this.sidebarVisibile = !this.sidebarVisibile;
    this.sidebarToggleChanged.emit(this.sidebarVisibile);
  } // onToggle
} // HeaderComponent
