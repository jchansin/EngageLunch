import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service/auth-service';
import { NavController, App, LoadingController, ToastController } from 'ionic-angular';
import { AuthenticationPage } from '../authentication/authentication';

/**
 * Generated class for the MenuTPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu-t',
  templateUrl: 'menu-t.html',
})
export class MenuTPage {

    loading: any;
    isLoggedIn: boolean = false;
  
    constructor(public app: App, public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
      if(localStorage.getItem("token")) {
        this.isLoggedIn = true;
      }
    }
  
    logout() {
      this.authService.logout().then((result) => {
        this.loading.dismiss();
        this.navCtrl.setRoot(AuthenticationPage);
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });
    }
  
    showLoader(){
      this.loading = this.loadingCtrl.create({
          content: 'Authenticating...'
      });
  
      this.loading.present();
    }
  
    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true
      });
  
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
  
      toast.present();
    }
  
  }