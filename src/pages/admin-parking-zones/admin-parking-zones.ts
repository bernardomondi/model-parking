import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AddParkingZonesPage} from '../../pages/add-parking-zones/add-parking-zones';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

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
  parkingZones: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, firebaseDB: AngularFireDatabase) {
      this.parkingZones = firebaseDB.list('/parkingZones');
      console.log(this.parkingZones);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminParkingZonesPage');
  }

  goToAddParkingPage(){
  	this.navCtrl.push(AddParkingZonesPage);
  }

  itemSelected(item){
    console.log(item);
  }

}
