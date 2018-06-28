import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Toast } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

// Native plug-ins
import { Push } from '@ionic-native/push';
import { NativeStorage } from '@ionic-native/native-storage';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecapCPage } from './../pages/recap-c/recap-c';
import { MenuTPage } from './../pages/menu-t/menu-t';
import { MenuCPage } from './../pages/menu-c/menu-c';
import { ListeTPage } from './../pages/liste-t/liste-t';
import { AuthenticationPage } from './../pages/authentication/authentication';
import { MenuCProvider } from './../providers/menu-c/menu-c';
import { AuthService } from './../providers/auth-service/auth-service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthenticationPage,
    ListeTPage,
    MenuCPage,
    MenuTPage,
    RecapCPage,

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
    RecapCPage,

  ],
  providers: [
    MenuCProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    NativeStorage,
    Push,


  ]
})
export class AppModule {}
