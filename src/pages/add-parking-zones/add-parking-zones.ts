import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { AdminParkingZonesPage} from '../../pages/admin-parking-zones/admin-parking-zones';

class ParkingZone {
  location: string
  description:string
  city: string
  country: string

  constructor() {}
}


@IonicPage()
@Component({
  selector: 'page-add-parking-zones',
  templateUrl: 'add-parking-zones.html',
})

export class AddParkingZonesPage {

	parkingZone : ParkingZone = new ParkingZone();

	

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddParkingZonesPage');
  }

  AddParkingZone(){
  	console.log(this.parkingZone.location);
  	this.af.list('/parkingZones').push(this.parkingZone)
    this.parkingZone = new ParkingZone();

    this.navCtrl.push(AdminParkingZonesPage);
  }

}
