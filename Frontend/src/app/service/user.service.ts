import { Injectable } from '@angular/core';

export interface UserData {
  username: string;
  name: string;
  role: string;
  promocards: any[];
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userData: UserData = {
    username: '',
    name: '',
    role: '',
    promocards: []
  };

  setUserData(user: any) {
    this.userData = user;
    console.log('Ingelogde gebruiker:', this.userData.name);
  }

}
