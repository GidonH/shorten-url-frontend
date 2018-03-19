import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss']
})
export class ShortenUrlComponent implements OnInit {

  longUrl: string;
  result: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  submit(){
    this.api.getShortUrl('longUrl').subscribe(()=> console.log('fff'))
  }

}
