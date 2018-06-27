import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


// Native plug-ins
import { Toast } from '@ionic-native/toast';
import { Push } from '@ionic-native/push';
import { NativeStorage } from '@ionic-native/native-storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecapCPage } from './../pages/recap-c/recap-c';
import { MenuTPage } from './../pages/menu-t/menu-t';
import { MenuCPage } from './../pages/menu-c/menu-c';
import { ListeTPage } from './../pages/liste-t/liste-t';
import { AuthenticationPage } from './../pages/authentication/authentication';
import { ApiProvider } from '../services/api.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthenticationPage,
    ListeTPage,
    MenuCPage,
    MenuTPage,
    RecapCPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    RecapCPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Toast,
    Push,
    NativeStorage,
    ApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
