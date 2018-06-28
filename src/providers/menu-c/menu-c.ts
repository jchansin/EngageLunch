import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

let apiUrl = 'http://groupe4.api/api';

/* let headers = new Headers();
let tokenHeader = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjMzNDRjNzUxNzk2ODQ1MDVkMTkxMzY5NDkzMjhiMDBhZGNlMmQ3ZWJmNGU0Mjc3NjFjNjE4MmE5NjhiNzhmMWZkODdlMzc3ODEyNDQwY2Y1In0.eyJhdWQiOiIxIiwianRpIjoiMzM0NGM3NTE3OTY4NDUwNWQxOTEzNjk0OTMyOGIwMGFkY2UyZDdlYmY0ZTQyNzc2MWM2MTgyYTk2OGI3OGYxZmQ4N2UzNzc4MTI0NDBjZjUiLCJpYXQiOjE1MzAxMTEyNTMsIm5iZiI6MTUzMDExMTI1MywiZXhwIjoxNTYxNjQ3MjUzLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.F6z8S_F8kmYgT-wTTPhTW5sWzVnK59tP6RmdMpvZGJ8a_ZrPfHPFXkPKQEd-pfWbroWjT3mRgD2nolZ4Q04tauPf99Y9d7g_oRtZ5QFSrTSFeYcBBYYzxpFnTEE55Dyo--I0EXG8adOSgd6An3qB4TkI8Aevoc1w6lNXIzHV4RTeGTDxj8LGcfQ84csO35UgH8Cq7f9v4esrkK6mhcwnqSuLk_uC4MEkKzep_eOgikB3VvcgRXUMqQ1XqJBQgfzHHAj33zNFO9llaYzIp0a-XDt3o89-yhq50UZV6vJ1hquZ4c1mHfBFYBZJ6AyXTEJqzySrIQakYW2yMe89QTDo5VC0F828VtBAPTaOTC_HJwLuM73tEYMyTjBloYDSuTeQp9a_5oQIibVPxipZiPREXdte7hw2NLKHnGKsXC-sQPM4CwOv1vINGF_y3aBw2QuYaWCR-nBa4WC6tMibEpiS4ixziKh5YTmwKLLzvxN9KrX-afJZaKHMo3dXeS6w3JDRoW56wgyNPixsrhMmSidmKZYmeAa9dvuXKoiUV9npqACtnItLVoiy3WtMYwP8Nvd2YrzdirTqltVkQi7_diroz-zYOztR9b0eAMTVhK9bZ3Ddy5TyVa622t9KcjKgMi_dDP5wmir9ja3aOoqx6rUjdsg8K0uD0hU_2knAmHyKGUc'
headers.append("Accept", "application/json");
headers.append("Authorization", tokenHeader); */

@Injectable()
export class MenuCProvider {

  data = [];


  constructor(public http: Http) {
    console.log('Hello MenuCProvider Provider');
  }

  getMenuC(): Promise<any> {
    let headers = new Headers();
    let tokenHeader = 'Bearer ' + this.data;
    headers.append("Accept", "application/json");
    headers.append("Authorization", tokenHeader);

    return this.http.get(apiUrl + '/menus/traiteur', { headers: headers })
      .toPromise()
      .then(response => response.json())
      .catch(err => console.log(err))

  }
}
