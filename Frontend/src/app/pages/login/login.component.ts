import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private dataService: DataService,
    private userService: UserService
  ) {}

  errorMessage: boolean = false;
  errorMessageText: string = '';

  loginObj: any = {
    username: '',
    password: ''
  };

  postUser(username: string, password: string) {
    this.dataService.postUser(username, password).subscribe({
      next: res => {
        this.router.navigate(['/dashboard'])
        const user = {
          username: res.username,
          name: res.name,
          role: res.role,
          promocards: res.promocards
        }
        this.userService.setUserData(user);
        sessionStorage.setItem('isLoggedIn', 'true');
      },
      error: err => {
        this.errorMessage = true;
        this.errorMessageText = err.error.message || 'Er is een fout opgetreden bij het ophalen van de gegevens';
      }
    });
  }

  Login() {
    if (this.loginObj.username === '' || this.loginObj.password === '') {
      this.errorMessage = true;
      this.errorMessageText = 'Vul zowel een gebruikersnaam als een wachtwoord in.';
      return;
    } else {
      this.postUser(this.loginObj.username, this.loginObj.password);
      this.errorMessage = false;
    }
  }
}
