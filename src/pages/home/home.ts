import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdminHomePage } from '../../pages/admin-home/admin-home';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  logInAsAdmin(){
  	this.navCtrl.push(AdminHomePage);
  }

}
