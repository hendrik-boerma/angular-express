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

  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.dataService.getData().subscribe({
      next: res => {
        console.log('res', res);
        this.userData = res;
      },
      error: err => {
        console.error('Error fetching data', err);
      }
    });
  }
}
