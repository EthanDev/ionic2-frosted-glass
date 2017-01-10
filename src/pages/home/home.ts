import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { FrostedGlassService } from "../../shared/frosted-glass.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public frostedGlassService: FrostedGlassService) { }


  presentAlert() {
    this.frostedGlassService.onActivateBackdrop.next(true);
    let alert = this.alertCtrl.create({
      title: 'Frosted Glass',
      subTitle: 'This is an example of the frosted glass effect',
      buttons: ['Ok, nice']
    });
    alert.present();

    alert.onDidDismiss(() => this.frostedGlassService.onActivateBackdrop.next(false));
  }

}
