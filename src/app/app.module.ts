import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecapCPage } from './../pages/recap-c/recap-c';
import { MenuTPage } from './../pages/menu-t/menu-t';
import { MenuCPage } from './../pages/menu-c/menu-c';
import { ListeTPage } from './../pages/liste-t/liste-t';
import { RegisterPage } from '../pages/register/register';

import { AuthenticationPage } from './../pages/authentication/authentication';
import { AuthService } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { AssitantePage } from '../pages/assitante/assitante';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthenticationPage,
    ListeTPage,
    MenuCPage,
    MenuTPage,
    RecapCPage,
    RegisterPage,
    AssitantePage
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
    RegisterPage,
    AssitantePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
