import { MenuCProvider } from './../../providers/menu-c/menu-c';
import { RecapCPage } from './../recap-c/recap-c';
//import { Push } from '@ionic-native/push';
import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import moment from 'moment';



@Component({
  selector: 'page-menu-c',
  templateUrl: 'menu-c.html',
})
export class MenuCPage {

  now = new Date();

  annee = this.now.getFullYear();
  mois = this.now.getMonth() + 1;
  jour = this.now.getDate();
  day = this.now.getDay();

  currentDate: any;
  ToDate: any
  FromDate: any;

  menuC: any;
  nameC = [];

  click = 0

  mardi = []; mercredi = []; jeudi = []; vendredi = []

  dateNow = moment().format('YYYY-MM-DD');
  time = moment().format('HH-mm-ss');

  constructor(public navCtrl: NavController, public navParams: NavParams, private Platform: Platform, private alertCtrl: AlertController, public menuProvider: MenuCProvider) {
    this.Platform.ready().then(() => {
      this.date();
      this.getUsers()

    })


  }

  clic(o) {

    console.log('click', o)

  }

  getMenu() {
    console.log('getmenu')
    for (let i = 0; i < this.menuC.length; i++) {
      if (this.menuC[i].date == "2018-06-26") {

        this.mardi.push({ "jours": "mardi"  , "number" : i,  "name": this.menuC[i].meal[0].name, "color": "white" })
        console.log('colo: ', this.menuC[i].meal[0].name)
      }
      else {
        if (this.menuC[i].date == "2018-06-27") {

          this.mercredi.push({ "jours": "mercredi"  , "number" : i,  "name": this.menuC[i].meal[0].name, "color": "white" })
          console.log('colo: ', this.menuC[i].meal[0].name)

        }
        else {
          if (this.menuC[i].date == "2018-06-28") {

            this.jeudi.push({ "jours": "jeudi"  , "number" : i,  "name": this.menuC[i].meal[0].name, "color": "white" })
            console.log('colo: ', this.menuC[i].meal[0].name)

          }
          else {
            if (this.menuC[i].date == "2018-06-29") {

              this.vendredi.push({ "jours": "vendredi"  , "number" : i,  "name": this.menuC[i].meal[0].name, "color": "white" })
              console.log('colo: ', this.menuC[i].meal[0].name)
  
            }
          
          }
        }
      }


    }
  }

  ClicMardi(i){
    console.log('backG', this.mardi)
    console.log('A', i)

    if(this.mardi[0].color == "white") this.mardi[0].color ="#78eb74a1"
      else this.mardi[0].color ="white"
    


  }

  getUsers() {
    this.menuProvider.getMenuC()
      .then(data => {
        this.menuC = data.data
        this.getMenu();
      });
  }


 /*  date() {


    this.ToDate = (this.day - 2)
    this.FromDate = (5 - this.day)

    let dateTo = moment().subtract(this.ToDate, 'days').calendar();
    let DateFrom = moment().add(10, 'days').calendar();



    console.log('today is: ', this.dateNow + ' and time: ', this.time);

    console.log('dateTo is: ', dateTo + ' and DateFrom: ', DateFrom);
  }
 */



  date() {

    this.ToDate = ( this.jour - (this.day - 2))
    this.FromDate = ( this.jour + ( 5 - this.day))
    console.log('ToDate', this.ToDate)
    console.log('FromDate', this.FromDate)


    console.log('now', this.now)



    console.log('now', this.now);
  
    this.now.setHours(7)
    console.log('apres jour', this.now);

    this.now.setDate(this.jour)
    console.log('ToDate', this.now);


    this.now.setDate((this.jour) + (5 - this.day));
    console.log('apres', this.now)
   
  }

  AlertConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Recapitulatif',
      message: 'Mardi: <br/> Mercredi: <br/> Jeudi: <br/> Vendredi ',
      buttons: [
        {
          text: 'Confirmer',
          handler: () => {

            this.navCtrl.push(RecapCPage)
            console.log('Confirmer clicked');
          }
        },
        {
          text: 'Retour',
          handler: () => {
            console.log('Modifier clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}


