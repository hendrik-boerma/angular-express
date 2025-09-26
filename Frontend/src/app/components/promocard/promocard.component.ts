import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-promocard',
  templateUrl: './promocard.component.html',
  styleUrl: './promocard.component.scss'
})
export class PromocardComponent {
  promocards: any[] = []

  constructor(private dataService: DataService) {}

  getProfessionalUsers() {
  this.dataService.getProfessionalUsers().subscribe({
      next: res => {
        this.promocards = res;
      },
      error: err => {
        console.error('Er is een fout opgetreden bij het ophalen van de gegevens', err);
      }
    });
}
  ngOnInit() {
    this.getProfessionalUsers();
  }
}
