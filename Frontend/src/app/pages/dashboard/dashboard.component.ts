import { Component } from '@angular/core';
import { UserService, UserData } from '../../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {  
  user: UserData = {
    username: '',
    name: '',
    role: '',
    promocards: []
  }

  constructor( private userService: UserService) {}

ngOnInit() {
    this.user = this.userService.userData;
}

}
