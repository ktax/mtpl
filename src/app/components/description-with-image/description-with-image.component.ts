import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description-with-image',
  templateUrl: './description-with-image.component.html',
  styleUrls: ['./description-with-image.component.scss'],
})
export class DescriptionWithImageComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  backgroundImage: string;

  constructor() {}

  ngOnInit() {}
}
