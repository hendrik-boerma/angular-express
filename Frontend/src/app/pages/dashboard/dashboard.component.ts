import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {  
  constructor( private userService: UserService) {}
  
  name: string = 'op het dashboard';

ngOnInit() {
    this.name = this.userService.userData?.name || 'op het dashboard';
}

}
