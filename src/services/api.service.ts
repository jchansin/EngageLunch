import { ApiGlobal } from './../models/api-global';
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { NativeStorage } from '@ionic-native/native-storage';

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Bearer " + this.token);  

@Injectable()

export class ApiProvider {

    private baseUrl: string = "http://groupe4.api/api/";
    private token: string;

    constructor(private http: Http, private nativeStorage: NativeStorage) {

        this.nativeStorage.getItem('token')
        .then(
            data => {
                console.log(data);
                this.token = data;
            },
            error => console.error(error)
        );

    }


    /* ********** Requêtes traiteurs ********** */

    // Liste des plats du traiteur
    getMealList() {
        return this.http.get("http://groupe4.api/api/traiteur/myMeals", { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };


    // Création d'un plat
    addMealApi(x) {
    return new Promise((resolve, reject) => {
        return this.http.post("http://groupe4.api/api/meal/create", { 'name' : x }, { headers : headers })
        .subscribe(res => {
          resolve(res.json());
        });
      })
    }

    // Suppression d'un plat
    deleteMealApi(x) {
        return this.http.delete("http://groupe4.api/api/meal/" + x, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    }


}