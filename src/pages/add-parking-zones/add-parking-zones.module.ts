import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddParkingZonesPage } from './add-parking-zones';

@NgModule({
  declarations: [
    AddParkingZonesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddParkingZonesPage),
  ],
  exports: [
    AddParkingZonesPage
  ]
})
export class AddParkingZonesPageModule {}
