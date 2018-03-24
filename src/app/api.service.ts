import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    host:string = 'http://localhost/shorten-url-admin';
    path:string = '/web/url/shorten-url';

    constructor(private http:HttpClient) {
    }

    getShortUrl(longUrl:string) {
        longUrl = encodeURIComponent(longUrl);
        return this.http.get(this.host + this.path + '?long=' + longUrl);
    }

    getReports(){
        return this.http.get(this.host+'/web/urls');
    }

}
