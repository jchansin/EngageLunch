import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { MenuCPage } from '../menu-c/menu-c';
import { MenuTPage } from '../menu-t/menu-t';
import { ListeTPage } from '../liste-t/liste-t';
/**
 * Generated class for the AuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-authentication',
  templateUrl: 'authentication.html',
})
export class AuthenticationPage{

  loading: any;
  loginData = { email:'', password:'', userstype_id:'' };
  data: any;

  constructor(public navCtrl: NavController, 
    public authService: AuthService, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController) {}

  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData)
    .then((result) => {
      this.loading.dismiss();
      this.data = result;
      if (this.data.success.userstype_id == 3) {
      localStorage.setItem('token', this.data.access_token);
      this.navCtrl.setRoot(MenuCPage);
      console.log('result',this.data) }
      if (this.data.success.userstype_id == 1) {
      localStorage.setItem('token', this.data.access_token);
      this.navCtrl.setRoot(ListeTPage);}
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
