import { ApiGlobal } from './../models/api-global';
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { NativeStorage } from '@ionic-native/native-storage';

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";


let baseUrl: string = "http://groupe4.api/api/";
let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJkNjcwNWFhNjAzZWFjMGZlNTBkM2QxMjBjZWUzYWJhNTEwMWJlZjMwZGRkMDgyMTI2NGIzNmI0ZmYxYjkwMjNhMDM4YjU0NjU2YTJkZTQ1In0.eyJhdWQiOiIxIiwianRpIjoiMmQ2NzA1YWE2MDNlYWMwZmU1MGQzZDEyMGNlZTNhYmE1MTAxYmVmMzBkZGQwODIxMjY0YjM2YjRmZjFiOTAyM2EwMzhiNTQ2NTZhMmRlNDUiLCJpYXQiOjE1MzAwNzQzNDcsIm5iZiI6MTUzMDA3NDM0NywiZXhwIjoxNTYxNjEwMzQ3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.de6C0n7M4Driq9cnisnDeBiwUWVsAM01W_ZeIOTXdtEg4K-weVtpOmaOCiqi9KaToMFgFYo_9ZKWo-58VKmIN3o2AP1c7k_vC_ovbpqkHPeQW4bvmFE5lI_BcSeQ14j4ZdyEIvF1kGW95V1ovuAjOKuxLZcaO3-rU86v5mip0ObSwqcO-H5AJQGWS3txqaKQdtCA5ZvJVcMvLhfcqVCG30bMpyDTd-TRjkyJsiz7CNP7FBAYV5UhhOMlUL3-tqqYFQP_S4owRn9thrjp4TlsRSgPz-LJwfx2uAsIjoSHYOR8M-HX-QcDVB7i6l5XeDnDBcE5gYo9VAYAiyjFTN_P1VEN_i5HrYgC8uqqbfl8BNBG6dvZZKz5YpLORtw0pkyyl_pYjGVtp4ohASvGJGhATBuVbW-Ki_gLG5VvQv0IjV7j01VUeeqSm1mkuNu0Lm8SLxkwPHuovrvfJFBhmT-G2Fu4qngf53yMMBjnx8ehHocY4dAELI3WJ7MCaLTNP0tFaEmJmfBCXEJvhgWJCZu0jf20qdtCOgOh5P8aaVogJMVKlAJt0JtedGoYG-0eYSEXMZTjc5vO4oOdF8DvSbftCE4l2nEHtOIAxS3T-n6RkkaxLd39TjCd5_g9H8KqlGBp0s-l_edCTSs5HL1XEkmmPCf1QUZ0f-Hnmqv46KNKuv0";
let headers = new Headers();
headers.append("Accept", "application/json");
headers.append("Authorization", "Bearer " + token); 


@Injectable()

export class ApiProvider {

  
    constructor(private http: Http, private nativeStorage: NativeStorage) {

        // this.nativeStorage.getItem('token')
        // .then(
        //     data => {
        //         console.log(data);
        //         this.token = data;
        //     },
        //     error => console.error(error)
        // );

    }

    /* ***** Requêtes authentification ***** */

    // Inscription
    public register(a, b, c, d, e, f) {
        return new Promise((resolve, reject) => {
            return this.http.post("http://groupe4.api/api/register", { 'fname' : a, 'lname' : b, 'email' : c, 'password' : d, 'c_password' : e, 'userstype_id' : f }, { headers : headers })
            .subscribe(res => {
                resolve(res.json());
            });
        })
    }

    // Login
    public login(x, y) {
        return new Promise((resolve, reject) => {
            return this.http.post("http://groupe4.api/api/login", { 'email' : x, 'password' : y }, { headers : headers })
            .subscribe(res => {
                resolve(res.json());
            });
        })
    }

    // Suppression d'un utilisateur
    public deleteUser(x) {
        return this.http.delete("http://groupe4.api/api/user/" + x, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    }



    /* ********** Requêtes traiteurs ********** */

    // Liste des plats du traiteur
    public getMealList() {
        return this.http.get("http://groupe4.api/api/traiteur/myMeals", { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };


    // Création d'un plat
    public addMealApi(x) {
        return new Promise((resolve, reject) => {
            return this.http.post("http://groupe4.api/api/meal/create", { 'name' : x }, { headers : headers })
            .subscribe(res => {
                resolve(res.json());
            });
        })
    }

    // Modification de l'image d'un plat
    public changeMealPicture(x, y) {
        return new Promise((resolve, reject) => {
            return this.http.post("http://groupe4.api/api/meal/uploadPicture", { 'meal_id' : x, 'picture' : y }, { headers : headers })
            .subscribe(res => {
                resolve(res.json());
            });
        })
    }

    // Récupération d'un plat
    public getMeal(x) {
        return this.http.get("http://groupe4.api/api/meal/" + x, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };

    // Mise à jour d'un plat
    public updateMeal(x, y) {
        return new Promise((resolve, reject) => {
            return this.http.put("http://groupe4.api/api/meal", { 'meal_id' : x, 'name' : y }, { headers : headers })
            .subscribe(res => {
                resolve(res.json());
            });
        })
    }

    // Suppression d'un plat
    public deleteMealApi(x) {
        return this.http.delete("http://groupe4.api/api/meal/" + x, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    // Liste des menus du traiteur
    public getMenuList() {
        return this.http.get("http://groupe4.api/api/menus/traiteur", { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };

    // Création d'un menu
    public createMenu(x, y) {
        return new Promise((resolve, reject) => {
            return this.http.post("http://groupe4.api/api/menu/create", { 'meal_id' : x, 'date' : y }, { headers : headers })
            .subscribe(res => {
                resolve(res.json());
            });
        })
    }

    // Mise à jour d'un menu
    public updateMenu(x, y, z) {
        return new Promise((resolve, reject) => {
            return this.http.put("http://groupe4.api/api/menu", { 'menu_id' : x, 'meal_id' : y, 'date' : z }, { headers : headers })
            .subscribe(res => {
                resolve(res.json());
            });
        })
    }

    // Suppression d'un menu
    public deleteMenu(x) {
        return this.http.delete("http://groupe4.api/api/menu/" + x, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    // Liste des commandes du traiteur pour une semaine donnée
    public getOrdersByWeek(x, y, z) {
        return this.http.get(`http://groupe4.api/api/myOrdersFrom/traiteur/${x}-${y}-${z}`, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };

    // Liste de toutes les commandes du traiteur
    public getAllOrdersT() {
        return this.http.get(`http://groupe4.api/api/myOrders/traiteur`, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };


    /* ********** Requêtes collaborateurs ********** */

    // Liste des menus de la semaine dd-mm-yyyy
    public getMenuFromWeek(x, y, z) {
        return this.http.get(`http://groupe4.api/api/menuFrom/${x}-${y}-${z}`, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };

    // Liste des menus du jour dd-mm-yyyy
    public getMenuFromDay(x, y, z) {
        return this.http.get(`http://groupe4.api/api/menuOf/${x}-${y}-${z}`, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };

    // Récupération de ses commandes
    public getAllOrdersC() {
        return this.http.get(`http://groupe4.api/api/myOrders`, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };

    // Récupération d'une commande
    public getOrder(x) {
        return this.http.get(`http://groupe4.api/api/order/${x}`, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    };

    // Création d'une commande
    public createOrder(x) {
        return new Promise((resolve, reject) => {
            return this.http.post("http://groupe4.api/api/order/create", { 'menu_id' : x }, { headers : headers })
            .subscribe(res => {
                resolve(res.json());
            });
        })
    }

    // Suppression d'une commande
    public deleteOrder(x) {
        return this.http.delete("http://groupe4.api/api/menu/" + x, { headers : headers })
        .toPromise()
        .then(response => response.json())
        .catch(err => console.log(err))
    }


}