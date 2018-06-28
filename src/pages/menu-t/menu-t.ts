import { ApiProvider } from './../../services/api.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-menu-t',
  templateUrl: 'menu-t.html',
})
export class MenuTPage {

  tuesdayChoices: Array<string>;
  wednesdayChoices: Array<string>;
  thursdayChoices: Array<string>;
  fridayChoices: Array<string>;

  meals = [];
  tuesday_meals: string;
  wednesday_meals: string;
  thursday_meals: string;
  friday_meals: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTPage');
    this.addMenu();
  }


  addMenu() {
    this.meals = [];
    this.api.getMealList()
    .then(response => {
      console.log('addMenu', response.data);
      for (let i = 0; i < response.data.length; i++) {
        this.meals.push(response.data[i]);
      }
      return this.meals;
    })
  }

  tuesdaySelected($event) {
    this.tuesday_meals = $event;
    console.log(this.tuesday_meals);
  }

  wednesdaySelected($event) {
    this.wednesday_meals = $event;
    console.log(this.wednesday_meals)
  }

  thursdaySelected($event) {
    this.thursday_meals = $event;
    console.log(this.thursday_meals)
  }

  fridaySelected($event) {
    this.friday_meals = $event;
    console.log(this.friday_meals)
  }



}
