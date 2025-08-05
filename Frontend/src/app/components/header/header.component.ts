import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private dataService: DataService) {}
  userData: any
  productData: any

  ngOnInit() {
    this.getUsers();
    this.getProducts();
  }
  
  getUsers() {
    this.dataService.getUsers().subscribe({
      next: res => {
        console.log('res', res);
        this.userData = res;
      },
      error: err => {
        console.error('Error fetching data', err);
      }
    });
  }
  
  getProducts() {
    this.dataService.getProducts().subscribe({
      next: res => {
        console.log('res', res);
        this.productData = res;
      },
      error: err => {
        console.error('Error fetching data', err);
      }
    });
  }
}
