import { Component, ViewChild, ElementRef } from '@angular/core';
import { CroppieOptions } from 'croppie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Hello Angular Croppie!';
  inputImage = '/assets/image.jpg';
  myZoom = 1;
  outputImage = null;
  croppieOptions: CroppieOptions = {
    enableZoom: true,
    enableOrientation: true,
    showZoomer: false,
    boundary: { width: 500, height: 300 },
    viewport: { width: 500, height: 300, type: 'square' },
  };

  onResult(result: any) {
    this.outputImage = result;
  }

  doZoom(zoom: number){
    console.log("do zoom " + zoom);
    this.myZoom = zoom;
  }

}
