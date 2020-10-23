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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
