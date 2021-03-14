import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Output() textOnChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('countrySearchInput', { static: true }) countrySearchInput: ElementRef;

  searchInputSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.searchInputSubscription = fromEvent(this.countrySearchInput.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value),
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
