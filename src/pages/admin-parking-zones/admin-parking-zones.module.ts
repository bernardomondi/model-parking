import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminParkingZonesPage } from './admin-parking-zones';

@NgModule({
  declarations: [
    AdminParkingZonesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminParkingZonesPage),
  ],
  exports: [
    AdminParkingZonesPage
  ]
})
export class AdminParkingZonesPageModule {}
