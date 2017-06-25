import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MotoristHomePage } from './motorist-home';

@NgModule({
  declarations: [
    MotoristHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MotoristHomePage),
  ],
  exports: [
    MotoristHomePage
  ]
})
export class MotoristHomePageModule {}
