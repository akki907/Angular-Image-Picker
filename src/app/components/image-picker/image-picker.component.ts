import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  DragulaService
} from "ng2-dragula";

@Component({
  selector: "app-image-picker",
  templateUrl: "./image-picker.component.html",
  styleUrls: ["./image-picker.component.css"]
})
export class ImagePickerComponent implements OnInit {
  @ViewChild("myCanvas") myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  public filesToUpload;
  public url;
  localUrl;
  image;
  constructor(private dragulaService: DragulaService) {}
  uploadImagetoStorageContainer() {
    let bannerImage = document.getElementById("bannerImage");
    const imgData = this.getBase64Image(bannerImage);
    const localStorageImage = localStorage.getItem("imgDatas");
    if (localStorageImage == null) {
      var images = [];
      images[0] = imgData;
      localStorage.setItem("imgDatas", JSON.stringify(images));
    } else {
      let data  = JSON.parse(localStorageImage)
      data.push(imgData)
      localStorage.setItem("imgDatas", JSON.stringify(data));
    }
    this.getLocalStorageImage();
    this.localUrl = ''
  }


 

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    return dataURL;
  }

  getLocalStorageImage() {
    var dataImage = JSON.parse(localStorage.getItem("imgDatas")) ;
    this.image = dataImage;
  }

  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit() {
    this.getLocalStorageImage()
  }
}
