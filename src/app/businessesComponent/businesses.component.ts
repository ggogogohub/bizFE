import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { DataService } from '../dataService';
import { CommonModule } from '@angular/common';
import { WebService } from '../../services/web.services';

@Component({
    selector: 'businesses',
    imports: [RouterOutlet, RouterModule, CommonModule],
    providers: [DataService, WebService],
    templateUrl: './businesses.component.html',
    styleUrl: './businesses.component.css'
})
export class BusinessesComponent {
    business_list: any;
    page: number = 1;

    constructor(public dataService: DataService,
        private webService: WebService) { }

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
        //this.business_list = this.dataService.getBusinesses(this.page);
        this.webService.getBusinesses(this.page)
            .subscribe((Response) => {
                this.business_list = Response;
            });
    }
    
}
