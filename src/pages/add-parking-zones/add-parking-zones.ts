import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';


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

	

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireModule) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddParkingZonesPage');
  }

  AddParkingZone(){
  	console.log(this.parkingZone.location);
  	this.af.database.list('/parkingZones').push(this.parkingZone)
    this.parkingZone = new ParkingZone()
  }

}
