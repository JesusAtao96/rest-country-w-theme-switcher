import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';

import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Output() textOnChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('countrySearchInput', { static: true }) countrySearchInput: ElementRef;

  searchInputSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.searchInputSubscription = fromEvent(this.countrySearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        debounceTime(500),
        distinctUntilChanged()
    )
    .subscribe((text: string) => {
        this.textOnChange.emit(text);
    });
  }

  ngOnDestroy(): void {
    this.searchInputSubscription.unsubscribe();
  }

}
