import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Frosted Glass',
      subTitle: 'This is an example of the frosted glass effect',
      buttons: ['Ok, nice']
    });
    alert.present();
  }

}
