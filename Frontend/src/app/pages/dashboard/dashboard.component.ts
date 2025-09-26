import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  get user(): UserService['userData'] {
    return this.userService.userData;
  }
  constructor(private userService: UserService) { }

}
