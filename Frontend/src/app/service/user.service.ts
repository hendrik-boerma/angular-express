import { Injectable } from '@angular/core';

export interface UserData {
  username: string;
  name: string;
  role: string;
  promocards: {
    name: string;
    role: string;
    description: string;
  }
  };

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData: UserData = {
    username: '',
    name: '',
    role: '',
    promocards: {
      name: '',
      role: '',
      description: ''
    }
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
