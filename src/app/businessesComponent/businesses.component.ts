import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DataService } from '../dataService';

@Component({
    selector: 'businesses',
    imports: [RouterOutlet, RouterModule],
    providers: [DataService],
    templateUrl: './businesses.component.html',
    styleUrl: './businesses.component.css'
})
export class BusinessesComponent {
    business_list: any;
    page: number = 1;

    constructor(public dataService: DataService) { }

    previousPage() {
        if (this.page > 1) {
            this.page = this.page - 1;
            this.business_list = this.dataService.getBusinesses(this.page);
        }

    }
    nextPage() {
        if (this.page < this.dataService.getLastPageNumber()) {
            this.page = this.page + 1;
            this.business_list = this.dataService.getBusinesses(this.page);
        }
    }

    ngOnInit() {
        this.business_list = this.dataService.getBusinesses(this.page);
    }
    
}
