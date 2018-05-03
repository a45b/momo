import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserModule } from './user/user.module';
import { NavModule } from './nav/nav.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
