import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

    pageSize: number = 4;

    constructor(private http: HttpClient) { }

    getBusinesses(page: number) {
        return this.http.get<any>(
            'http://127.0.0.1:5001/businesses?pn=' + page + '&ps=' + this.pageSize);
    }

    getBusiness(id: any) {
        return this.http.get<any>(
            'http://127.0.0.1:5001/business');
    }
}