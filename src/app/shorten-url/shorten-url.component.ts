import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss']
})
export class ShortenUrlComponent implements OnInit {

  longUrl: string;
  result: any = 'test';

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  submit(){
    this.api.getShortUrl(this.longUrl).subscribe((res) => {this.result = res;});
  }

}
