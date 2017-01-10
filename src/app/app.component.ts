import { Component, HostBinding } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { FrostedGlassService } from "../shared/frosted-glass.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @HostBinding('class.frosted-glass-backdrop') isFrostedGlassBackdropActivated: boolean = false;

  rootPage = HomePage;

  constructor(platform: Platform, public frostedGlassService: FrostedGlassService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.frostedGlassService.onActivateBackdrop.subscribe(res => this.isFrostedGlassBackdropActivated = res);
    });
  }
}
