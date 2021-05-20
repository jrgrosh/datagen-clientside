import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageGenService {

  constructor() { }

  getNextImagePath(): String{
    return "/assets/img/IMG_0546.jpg"
  }
}
