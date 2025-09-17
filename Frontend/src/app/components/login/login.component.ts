import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  checkInput() {
    if (this.username === '' || this.password === '') {
      console.log('vul iets in');
    } else {
      console.log('Inloggen knop geklikt!');
    }
  }

}
