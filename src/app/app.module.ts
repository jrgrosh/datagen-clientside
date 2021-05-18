import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { DatagenButtonComponent } from './datagen-button/datagen-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewComponent,
    DatagenButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
