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

  constructor() {
    const storedUser = sessionStorage.getItem('userData');
    if (storedUser) {
      this.userData = JSON.parse(storedUser);
    }
  }

  setUserData(user: UserData) {
    this.userData = user;
    sessionStorage.setItem('userData', JSON.stringify(user));
  }

}
