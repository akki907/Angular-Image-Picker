import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DragulaModule} from 'ng2-dragula'
// @ Components
import { ImagePickerComponent } from './components/image-picker/image-picker.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ImagePickerComponent,
    NavbarComponent 
   ],
  imports: [
    BrowserModule,DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
