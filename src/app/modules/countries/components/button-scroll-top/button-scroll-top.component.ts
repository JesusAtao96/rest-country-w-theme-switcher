import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-button-scroll-top',
  templateUrl: './button-scroll-top.component.html',
  styles: [
  ]
})
export class ButtonScrollTopComponent implements OnInit {
  pageYoffset: number;

  @HostListener('window:scroll', ['$event']) onScroll(event): void {
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    this.scroll.scrollToPosition([0, 0]);
  }

}
