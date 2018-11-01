import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  opened = false;
  constructor(private scrollService: ScrollService) {}

  toggleMenu() {
    this.opened = !this.opened;
  }

  scrollTo(destination: string) {
    this.scrollService.triggerScrollTo(destination);
  }

  ngOnInit() {}
}
