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

  checkMa = 0; checkMer = 0; checkJeu = 0; checkVen = 0;

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

    let ma = 0; let mer = 0; let jeu = 0; let ven = 0
    for (let i = 0; i < this.menuC.length; i++) {
      if (this.menuC[i].date == "2018-06-26") {

        this.mardi.push({ "jours": "mardi", "number": ma, "name": this.menuC[i].meal[0].name, "color": "white" })
        ma++
      }
      else {
        if (this.menuC[i].date == "2018-06-27") {

          this.mercredi.push({ "jours": "mercredi", "number": mer, "name": this.menuC[i].meal[0].name, "color": "white" })
          mer++
        }
        else {
          if (this.menuC[i].date == "2018-06-28") {

            this.jeudi.push({ "jours": "jeudi", "number": jeu, "name": this.menuC[i].meal[0].name, "color": "white" })
            jeu++
          }
          else {
            if (this.menuC[i].date == "2018-06-29") {

              this.vendredi.push({ "jours": "vendredi", "number": ven, "name": this.menuC[i].meal[0].name, "color": "white" })
              ven++
            }

          }
        }
      }


    }
  }

  ClicMardi(i) {
    if (this.checkMa == 0) {
      this.mardi[i].color = "#78eb74a1";
      this.checkMa++

    } else {

      if (this.mardi[i].color == "white") {

        for (let j = 0; j < this.mardi.length; j++) {
          this.mardi[j].color = "white"
        }
        this.mardi[i].color = "#78eb74a1";
        this.checkMa++
      } else {
        this.mardi[i].color = "white";
        this.checkMa--
      }
    }
  }

  ClicMer(j) {
    if (this.checkMer == 0) {
      this.mercredi[j].color = "#78eb74a1";
      this.checkMer++

    } else {

      if (this.mercredi[j].color == "white") {

        for (let j = 0; j < this.mercredi.length; j++) {
          this.mercredi[j].color = "white"
        }
        this.mercredi[j].color = "#78eb74a1";
        this.checkMer++
      } else {
        this.mercredi[j].color = "white";
        this.checkMer--
      }
    }
  }

  Clicjeu(k) {
    if (this.checkJeu == 0) {
      this.jeudi[k].color = "#78eb74a1";
      this.checkJeu++

    } else {

      if (this.jeudi[k].color == "white") {

        for (let j = 0; j < this.jeudi.length; j++) {
          this.jeudi[j].color = "white"
        }
        this.jeudi[k].color = "#78eb74a1";
        this.checkJeu++
      } else {
        this.jeudi[k].color = "white";
        this.checkJeu--
      }
    }
  }

  ClicVen(l) {
    if (this.checkVen == 0) {
      this.vendredi[l].color = "#78eb74a1";
      this.checkVen++

    } else {

      if (this.vendredi[l].color == "white") {

        for (let j = 0; j < this.vendredi.length; j++) {
          this.vendredi[j].color = "white"
        }
        this.vendredi[l].color = "#78eb74a1";
        this.checkVen++
      } else {
        this.vendredi[l].color = "white";
        this.checkVen--
      }
    }
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

    this.ToDate = (this.jour - (this.day - 2))
    this.FromDate = (this.jour + (5 - this.day))
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


