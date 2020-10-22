import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Shared Module
import { SharedModule } from './shared/shared.module';
// User Module
import { UserModule } from './user/user.module';
// httpclient
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
