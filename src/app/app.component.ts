import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel';

  constructor( private router: Router){}

gotoHotel(){
  this.router.navigate(["hotel"]);
}

gotoGuests(){
  this.router.navigate(["guests"]);
}

gotoRooms(){
  this.router.navigate(["rooms"]);
}

gotoAdministration(){
  this.router.navigate(["administration"]);
}

gotoLogin(){
  this.router.navigate(["login"]);
}

gotoRegistration(){
  this.router.navigate(["registration"]);
}

gotoStaffs(){
  this.router.navigate(["staffs"]);
}

gotoAdmin(){
  this.router.navigate(["admin"]);
}
ngOnInit(){
  
}
}