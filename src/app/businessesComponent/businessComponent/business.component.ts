import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DataService } from '../../dataService';


@Component({
    selector: 'business',
    imports: [RouterOutlet],
    providers: [DataService],
    templateUrl: './business.component.html',
    styleUrl: './business.component.css'
})
export class BusinessComponent {
    business_list: any

    constructor(public dataService: DataService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.business_list = this.dataService.getBusiness(
            this.route.snapshot.paramMap.get('id')
        );
    }
}
