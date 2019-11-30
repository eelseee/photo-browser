import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhotos } from './photos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  public photos = [];
  public photo = {};
  private _url: string = "https://jsonplaceholder.typicode.com/photos";
  constructor(private http: HttpClient) { };
  
  ngOnInit(){
  }

  getPhotos(): Observable<IPhotos[]>{
    let test = this.http.get<IPhotos[]>(this._url);
    return test;
  }
}
