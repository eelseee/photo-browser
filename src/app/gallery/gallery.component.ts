import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhotos } from '../photos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
    public photos = [];    
    private _url: string = "https://jsonplaceholder.typicode.com/photos";
    public selectedPhoto = "#";
    count = 10;

    constructor(
      private http: HttpClient
    ) {};
    
    ngOnInit(){   
      this.getPhotos().subscribe(data => {
         this.photos = data.slice(1, 10);
       });
    }

    //Get images from JSON
    getPhotos(): Observable<IPhotos[]>{
      let test = this.http.get<IPhotos[]>(this._url);
      return test;
    }

    //Lazy loading
    @HostListener("window:scroll", ['$event'])

    onWindowScroll() {
      this.count ++;
  
    this.getPhotos().subscribe(data => {
        if(this.count < data.length){
          this.photos.push(data[this.count]);
        }
      }); 
    }

    //Popup for images
    onPhotoClick(url) {
      this.selectedPhoto = url;
      document.getElementById("overlaypop").style.display = "block";
    }

    onFocusLoss(){
      document.getElementById("overlaypop").style.display = "none";
    }
}

