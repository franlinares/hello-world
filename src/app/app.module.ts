import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// User Module
import { UserModule } from './user/user.module';
// httpclient
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

//Components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';

//LOCALE ID
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

// Pipes
// import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
