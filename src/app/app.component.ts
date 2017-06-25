import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AdminParkingZonesPage } from '../pages/admin-parking-zones/admin-parking-zones';
import { MotoristHomePage } from '../pages/motorist-home/motorist-home';
import { MotoristParkingZonesPage } from '../pages/motorist-parking-zones/motorist-parking-zones';
import { ParkingSlotsViewPage } from '../pages/parking-slots-view/parking-slots-view';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
