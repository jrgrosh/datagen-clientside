import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageGenService {
  
  private observable = new Observable<string>( (observer) => {
    setInterval(() => {
      observer.next(this.imageUrl);
    }, 50)
  });
  private imageUrl: string = ""
  private randomSyntheticImageLinkUrl:string = "http://localhost:3000/unvalidated/synthetic-images/random"
  constructor(private http: HttpClient) { }

  validateSyntheticImageCandidate(){
    console.log("REST no longer")
    console.log(this.imageUrl);
    this.http.post<any>(this.imageUrl, null,).subscribe((response) => {
      console.log(response);
    });
  }

  updateRandomSyntheticCandidateURL(){
    console.log("hello")
    this.http.get<string>(this.randomSyntheticImageLinkUrl).subscribe((url) => {
      this.imageUrl = JSON.parse(JSON.stringify(url))["imageUrl"];
      console.log(this.imageUrl);
    });
  }

  getRandomSyntheticCandidateURL(): Observable<string>{
    return this.observable;
  }

  getNextImagePath(): String{
    return "/assets/img/IMG_0546.jpg"
  }
}
