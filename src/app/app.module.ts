// librerie
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// moduli applicativi
import { AppComponent } from './app.component';
import { HeaderComponent } from './comune/header/header.component';
import { SidebarComponent } from './comune/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
