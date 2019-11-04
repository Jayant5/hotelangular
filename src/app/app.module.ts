import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { GuestsComponent } from './guests/guests.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AdministrationComponent } from './administration/administration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { StaffsComponent } from './staffs/staffs.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    GuestsComponent,
    RoomsComponent,
    AdministrationComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    StaffsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
