import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  url = 'http://localhost/shorten-url-admin/web/';

  constructor(private http: HttpClient) { }

  getShortUrl(longUrl: string){
   return this.http.get(this.url);
  }

}
