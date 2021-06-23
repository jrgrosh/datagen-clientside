import { Component } from '@angular/core';
import { ImageGenService } from './image-gen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datagen-clientside';
  image : String = "/assets/img/test_image.PNG";

  constructor(private imageGenService : ImageGenService){

  }

  acceptOnClick(){
    console.log("accept clicked")
    this.imageGenService.validateSyntheticImageCandidate();
    this.imageGenService.updateRandomSyntheticCandidateURL();
  }

  rejectOnClick(){
    console.log("reject clicked")
    this.imageGenService.rejectSyntheticImageCandidate();
    this.imageGenService.updateRandomSyntheticCandidateURL();
  }

  ngOnInit(){
    this.image = this.imageGenService.getNextImagePath();
    //document.getElementById("image-view-component")?.setAttribute("src", this.image.valueOf())
  }
  

}
