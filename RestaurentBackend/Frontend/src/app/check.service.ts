import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() { }

  public isUserLogin(): boolean {
   
    //console.log(localuser)
    if (sessionStorage.getItem('user') != null || sessionStorage.getItem('user')!= undefined) {
           return true;
    } 
    else
     {
      return false;
    }
  }

  public setUserSession(username: any) {
    sessionStorage.setItem('user', username);
  }
  public logOut() {
    sessionStorage.removeItem('user');
    sessionStorage.clear();
  }
}
