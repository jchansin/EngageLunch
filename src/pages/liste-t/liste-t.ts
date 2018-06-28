import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from "@angular/http";


@Component({
  selector: 'page-liste-t',
  templateUrl: 'liste-t.html',
})

export class ListeTPage {

  meals = [];
  newMeal: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeTPage');
    this.showMealList();
  }

  // Récupérer la liste en DB
  getMealList() {
    let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJkNjcwNWFhNjAzZWFjMGZlNTBkM2QxMjBjZWUzYWJhNTEwMWJlZjMwZGRkMDgyMTI2NGIzNmI0ZmYxYjkwMjNhMDM4YjU0NjU2YTJkZTQ1In0.eyJhdWQiOiIxIiwianRpIjoiMmQ2NzA1YWE2MDNlYWMwZmU1MGQzZDEyMGNlZTNhYmE1MTAxYmVmMzBkZGQwODIxMjY0YjM2YjRmZjFiOTAyM2EwMzhiNTQ2NTZhMmRlNDUiLCJpYXQiOjE1MzAwNzQzNDcsIm5iZiI6MTUzMDA3NDM0NywiZXhwIjoxNTYxNjEwMzQ3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.de6C0n7M4Driq9cnisnDeBiwUWVsAM01W_ZeIOTXdtEg4K-weVtpOmaOCiqi9KaToMFgFYo_9ZKWo-58VKmIN3o2AP1c7k_vC_ovbpqkHPeQW4bvmFE5lI_BcSeQ14j4ZdyEIvF1kGW95V1ovuAjOKuxLZcaO3-rU86v5mip0ObSwqcO-H5AJQGWS3txqaKQdtCA5ZvJVcMvLhfcqVCG30bMpyDTd-TRjkyJsiz7CNP7FBAYV5UhhOMlUL3-tqqYFQP_S4owRn9thrjp4TlsRSgPz-LJwfx2uAsIjoSHYOR8M-HX-QcDVB7i6l5XeDnDBcE5gYo9VAYAiyjFTN_P1VEN_i5HrYgC8uqqbfl8BNBG6dvZZKz5YpLORtw0pkyyl_pYjGVtp4ohASvGJGhATBuVbW-Ki_gLG5VvQv0IjV7j01VUeeqSm1mkuNu0Lm8SLxkwPHuovrvfJFBhmT-G2Fu4qngf53yMMBjnx8ehHocY4dAELI3WJ7MCaLTNP0tFaEmJmfBCXEJvhgWJCZu0jf20qdtCOgOh5P8aaVogJMVKlAJt0JtedGoYG-0eYSEXMZTjc5vO4oOdF8DvSbftCE4l2nEHtOIAxS3T-n6RkkaxLd39TjCd5_g9H8KqlGBp0s-l_edCTSs5HL1XEkmmPCf1QUZ0f-Hnmqv46KNKuv0");        
    
    return this.http.get("http://groupe4.api/api/traiteur/myMeals", {headers : headers })
    .toPromise()
    .then(response => response.json())
    .catch(err => console.log(err))
  };

  // Afficher la liste
  showMealList() {
    this.meals = [];
    this.getMealList()
    .then(response => {
      console.log('showMealList', response.data);
      for (let i = 0; i < response.data.length; i++) {
        this.meals.push(response.data[i]);
      }
      return this.meals;
    })
  }

  // Effacer un plat de la liste
  deleteMeal(x) {
    this.deleteMealApi(x)
    .then((response) => {
      this.showMealList();
    })
    .catch((e) => console.log('Erreur deleteMeal'))
  }

  // Requête "effacer un plat"
  deleteMealApi(x) {
    let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJkNjcwNWFhNjAzZWFjMGZlNTBkM2QxMjBjZWUzYWJhNTEwMWJlZjMwZGRkMDgyMTI2NGIzNmI0ZmYxYjkwMjNhMDM4YjU0NjU2YTJkZTQ1In0.eyJhdWQiOiIxIiwianRpIjoiMmQ2NzA1YWE2MDNlYWMwZmU1MGQzZDEyMGNlZTNhYmE1MTAxYmVmMzBkZGQwODIxMjY0YjM2YjRmZjFiOTAyM2EwMzhiNTQ2NTZhMmRlNDUiLCJpYXQiOjE1MzAwNzQzNDcsIm5iZiI6MTUzMDA3NDM0NywiZXhwIjoxNTYxNjEwMzQ3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.de6C0n7M4Driq9cnisnDeBiwUWVsAM01W_ZeIOTXdtEg4K-weVtpOmaOCiqi9KaToMFgFYo_9ZKWo-58VKmIN3o2AP1c7k_vC_ovbpqkHPeQW4bvmFE5lI_BcSeQ14j4ZdyEIvF1kGW95V1ovuAjOKuxLZcaO3-rU86v5mip0ObSwqcO-H5AJQGWS3txqaKQdtCA5ZvJVcMvLhfcqVCG30bMpyDTd-TRjkyJsiz7CNP7FBAYV5UhhOMlUL3-tqqYFQP_S4owRn9thrjp4TlsRSgPz-LJwfx2uAsIjoSHYOR8M-HX-QcDVB7i6l5XeDnDBcE5gYo9VAYAiyjFTN_P1VEN_i5HrYgC8uqqbfl8BNBG6dvZZKz5YpLORtw0pkyyl_pYjGVtp4ohASvGJGhATBuVbW-Ki_gLG5VvQv0IjV7j01VUeeqSm1mkuNu0Lm8SLxkwPHuovrvfJFBhmT-G2Fu4qngf53yMMBjnx8ehHocY4dAELI3WJ7MCaLTNP0tFaEmJmfBCXEJvhgWJCZu0jf20qdtCOgOh5P8aaVogJMVKlAJt0JtedGoYG-0eYSEXMZTjc5vO4oOdF8DvSbftCE4l2nEHtOIAxS3T-n6RkkaxLd39TjCd5_g9H8KqlGBp0s-l_edCTSs5HL1XEkmmPCf1QUZ0f-Hnmqv46KNKuv0");        
    
    return this.http.delete("http://groupe4.api/api/meal/" + x, { headers : headers })
    .toPromise()
    .then(response => response.json())
    .catch(err => console.log(err))
  }


  // Ajouter un plat dans la liste
  addMeal(x) {
    this.addMealApi(x)
    .then((response) => {
      this.showMealList();
    })
    .catch((e) => console.log('Erreur addMeal'))
  }

  // Requête "ajouter un plat"
  addMealApi(x) {
    return new Promise((resolve, reject) => {

      let headers = new Headers();
      headers.append("Accept", "application/json");
      headers.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJkNjcwNWFhNjAzZWFjMGZlNTBkM2QxMjBjZWUzYWJhNTEwMWJlZjMwZGRkMDgyMTI2NGIzNmI0ZmYxYjkwMjNhMDM4YjU0NjU2YTJkZTQ1In0.eyJhdWQiOiIxIiwianRpIjoiMmQ2NzA1YWE2MDNlYWMwZmU1MGQzZDEyMGNlZTNhYmE1MTAxYmVmMzBkZGQwODIxMjY0YjM2YjRmZjFiOTAyM2EwMzhiNTQ2NTZhMmRlNDUiLCJpYXQiOjE1MzAwNzQzNDcsIm5iZiI6MTUzMDA3NDM0NywiZXhwIjoxNTYxNjEwMzQ3LCJzdWIiOiI1Iiwic2NvcGVzIjpbXX0.de6C0n7M4Driq9cnisnDeBiwUWVsAM01W_ZeIOTXdtEg4K-weVtpOmaOCiqi9KaToMFgFYo_9ZKWo-58VKmIN3o2AP1c7k_vC_ovbpqkHPeQW4bvmFE5lI_BcSeQ14j4ZdyEIvF1kGW95V1ovuAjOKuxLZcaO3-rU86v5mip0ObSwqcO-H5AJQGWS3txqaKQdtCA5ZvJVcMvLhfcqVCG30bMpyDTd-TRjkyJsiz7CNP7FBAYV5UhhOMlUL3-tqqYFQP_S4owRn9thrjp4TlsRSgPz-LJwfx2uAsIjoSHYOR8M-HX-QcDVB7i6l5XeDnDBcE5gYo9VAYAiyjFTN_P1VEN_i5HrYgC8uqqbfl8BNBG6dvZZKz5YpLORtw0pkyyl_pYjGVtp4ohASvGJGhATBuVbW-Ki_gLG5VvQv0IjV7j01VUeeqSm1mkuNu0Lm8SLxkwPHuovrvfJFBhmT-G2Fu4qngf53yMMBjnx8ehHocY4dAELI3WJ7MCaLTNP0tFaEmJmfBCXEJvhgWJCZu0jf20qdtCOgOh5P8aaVogJMVKlAJt0JtedGoYG-0eYSEXMZTjc5vO4oOdF8DvSbftCE4l2nEHtOIAxS3T-n6RkkaxLd39TjCd5_g9H8KqlGBp0s-l_edCTSs5HL1XEkmmPCf1QUZ0f-Hnmqv46KNKuv0");        
      
      return this.http.post("http://groupe4.api/api/meal/create", { 'name' : x }, { headers : headers })
      .subscribe(res => {
        resolve(res.json());
      });
    })
  }

}