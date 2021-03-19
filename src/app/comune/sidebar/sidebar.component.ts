// librerie
import { Component, Input, OnInit } from '@angular/core';
// moduli applicativi
import { VOCI_MENU } from './@config/sidebar-menu.config';

@Component({
  selector: 'mbd-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebarVisibile = false;
  vociMenu = VOCI_MENU;

  /**
   * crea un nuovo componente
   */
  constructor() {} // constructor

  /**
   * inizializza il componente
   */
  ngOnInit(): void {} // ngOnInit
} // SidebarComponent
