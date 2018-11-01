import { Injectable } from '@angular/core';
import {
  ScrollToService,
  ScrollToConfigOptions,
} from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private scrollToService: ScrollToService) {}

  public triggerScrollTo(destination: string) {
    console.log('scrolling', destination);
    const config: ScrollToConfigOptions = {
      target: destination,
      duration: 500,
      // easing: 'easeOutElastic',
      offset: -10,
    };
    this.scrollToService.scrollTo(config);
  }
}
