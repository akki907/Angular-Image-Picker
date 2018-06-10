import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DragulaModule} from 'ng2-dragula'
// @ Components
import { ImagePickerComponent } from './components/image-picker/image-picker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UploadModalComponent } from './components/upload-modal/upload-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ImagePickerComponent,
    NavbarComponent,
    UploadModalComponent
  ],
  imports: [
    BrowserModule,DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
