import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { CroppieOptions } from 'croppie';
import Croppie from 'croppie';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.css']
})
export class ImageCropComponent implements OnChanges {

  private croppie: Croppie;

  @ViewChild('image') image: ElementRef;
  @Input() zoom: number;
  @Input() imageUrl: string;
  @Input() croppieOptions: CroppieOptions;
  @Output() result: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnChanges(): void {
    if(this.croppie == null){
      this.croppie = new Croppie(this.image.nativeElement, this.croppieOptions);
    }

    this.croppie.bind({
      url: this.imageUrl,
      points: [100, 100, 500, 500]
    }).then(() => this.croppie.setZoom(this.zoom));
  }

  onUpdate() {
    this.croppie.result({ type: 'base64', size: 'viewport' }).then((res) => {
      this.result.emit(res);
    });
  }

}
