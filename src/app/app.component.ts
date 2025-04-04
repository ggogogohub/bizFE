import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusinessesComponent } from './businessesComponent/businesses.component';
import jsonData from '../assets/bizDB.biz.json';
import { NavComponent } from './navComponent/nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, BusinessesComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to bizFE...';

  ngOnInIt() {
    console.log(jsonData);
  }
}
