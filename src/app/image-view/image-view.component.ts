import { Component, OnInit } from '@angular/core';
import { ImageGenService } from '../image-gen.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  public imageUrl : string = "http://localhost:3000/unvalidated/synthetic-images/0"
  constructor(private imageGenService : ImageGenService) { }

  ngOnInit(): void {
    this.updateImageUrl();
  }

  public updateImageUrl():void {
    this.imageGenService.getRandomSyntheticCandidateURL().subscribe((url) => {
      this.imageUrl = url;
    });
  }

}
