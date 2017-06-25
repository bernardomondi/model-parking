import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkingSlotsViewPage } from './parking-slots-view';

@NgModule({
  declarations: [
    ParkingSlotsViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ParkingSlotsViewPage),
  ],
  exports: [
    ParkingSlotsViewPage
  ]
})
export class ParkingSlotsViewPageModule {}
