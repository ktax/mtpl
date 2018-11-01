import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-half',
  templateUrl: './image-half.component.html',
  styleUrls: ['./image-half.component.scss'],
})
export class ImageHalfComponent implements OnInit {
  @Input()
  src: string;
  constructor() {}

  ngOnInit() {}
}
