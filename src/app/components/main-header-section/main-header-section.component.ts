import { ScrollService } from 'src/app/scroll.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-header-section',
  templateUrl: './main-header-section.component.html',
  styleUrls: ['./main-header-section.component.scss'],
})
export class MainHeaderSectionComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  subtitle: string;
  @Input()
  cta: string;
  constructor(private scrollService: ScrollService) {}

  scrollToContact() {
    this.scrollService.triggerScrollTo('contact');
  }
  ngOnInit() {}
}
