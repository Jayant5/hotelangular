import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HotelComponent } from './hotel/hotel.component';
import { GuestsComponent } from './guests/guests.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AdministrationComponent } from './administration/administration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffsComponent } from './staffs/staffs.component';

const routes: Routes = [
  {path:" ",redirectTo:"/app",pathMatch:"full"},
  {path:"hotel",component:HotelComponent},
  {path:"guests",component:GuestsComponent},
  {path:"rooms",component:RoomsComponent},
  {path:"administration",component:AdministrationComponent},
  {path:"login",component:LoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:'staffs', component: StaffsComponent},
  {path:'admin', component:AdminComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
