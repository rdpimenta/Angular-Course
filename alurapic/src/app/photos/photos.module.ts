import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  imports: [HttpClientModule],
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
})
export class PhotosModule {}
