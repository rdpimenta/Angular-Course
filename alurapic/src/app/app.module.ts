import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { PhotoComponent } from './photos/photo/photo.component';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PhotosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}