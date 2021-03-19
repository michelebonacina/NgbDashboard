// librerie
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() sidebarVisibile = false;

  /**
   * crea un nuovo componente
   */
  constructor() {} // constructor

  /**
   * inizializza il componente
   */
  ngOnInit(): void {} // ngOnInit
} // SidebarComponent
