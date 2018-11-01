import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contraindications',
  templateUrl: './contraindications.component.html',
  styleUrls: ['./contraindications.component.scss'],
})
export class ContraindicationsComponent implements OnInit {
  @Input()
  title: string;

  constructor() {}

  ngOnInit() {}
}
