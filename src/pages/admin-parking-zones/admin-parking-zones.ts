import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AddParkingZonesPage} from '../../pages/add-parking-zones/add-parking-zones';

/**
 * Generated class for the AdminParkingZonesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-admin-parking-zones',
  templateUrl: 'admin-parking-zones.html',
})
export class AdminParkingZonesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminParkingZonesPage');
  }

  goToAddParkingPage(){
  	this.navCtrl.push(AddParkingZonesPage);
  }

}
