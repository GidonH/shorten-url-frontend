import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

    reports;

    constructor(public api:ApiService) {
    }

    ngOnInit() {
        this.api.getReports().subscribe((res)=> this.reports = res);
    }

}
