import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotoristParkingZonesPage } from './motorist-parking-zones';

@NgModule({
  declarations: [
    MotoristParkingZonesPage,
  ],
  imports: [
    IonicPageModule.forChild(MotoristParkingZonesPage),
  ],
  exports: [
    MotoristParkingZonesPage
  ]
})
export class MotoristParkingZonesPageModule {}
