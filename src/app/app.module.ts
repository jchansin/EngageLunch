import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Toast } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Native plug-ins
import { Push } from '@ionic-native/push';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecapCPage } from './../pages/recap-c/recap-c';
import { MenuTPage } from './../pages/menu-t/menu-t';
import { MenuCPage } from './../pages/menu-c/menu-c';
import { ListeTPage } from './../pages/liste-t/liste-t';
import { AuthenticationPage } from './../pages/authentication/authentication';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthenticationPage,
    ListeTPage,
    MenuCPage,
    MenuTPage,
    RecapCPage,
    Toast,
    Push
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthenticationPage,
    ListeTPage,
    MenuCPage,
    MenuTPage,
    RecapCPage,
    Toast,
    Push
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
