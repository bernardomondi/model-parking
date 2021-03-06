import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AdminHomePage } from '../pages/admin-home/admin-home';
import { AdminParkingZonesPage } from '../pages/admin-parking-zones/admin-parking-zones';
import { MotoristHomePage } from '../pages/motorist-home/motorist-home';
import { MotoristParkingZonesPage } from '../pages/motorist-parking-zones/motorist-parking-zones';
import { ParkingSlotsViewPage } from '../pages/parking-slots-view/parking-slots-view';
import { AddParkingZonesPage } from '../pages/add-parking-zones/add-parking-zones';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


  const config = {
    // apiKey: "AIzaSyDvJRmuxeCcLgYFjVcPn95Q4Ik_kgLcDDo",
    // authDomain: "parking-slot-e2d34.firebaseapp.com",
    // databaseURL: "https://parking-slot-e2d34.firebaseio.com",
    // projectId: "parking-slot-e2d34",
    // storageBucket: "parking-slot-e2d34.appspot.com",
    // messagingSenderId: "825301607818"

    apiKey: "AIzaSyBk6-2s04gErqH5sk17FxMQvRVV31F8vKE",
    authDomain: "ionic2-8864e.firebaseapp.com",
    databaseURL: "https://ionic2-8864e.firebaseio.com",
    projectId: "ionic2-8864e",
    storageBucket: "",
    messagingSenderId: "397058415053"
  };



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminHomePage,
    AdminParkingZonesPage,
    MotoristHomePage,
    MotoristParkingZonesPage,
    ParkingSlotsViewPage,
    AddParkingZonesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminHomePage,
    AdminParkingZonesPage,
    MotoristHomePage,
    MotoristParkingZonesPage,
    ParkingSlotsViewPage,
    AddParkingZonesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
