import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styles: [
  ]
})
export class SelectBoxComponent implements OnInit {
  @Output() regionOnChange: EventEmitter<string> = new EventEmitter<string>();
  placeholderText = 'Filter by Region';

  regions = [
    { text: 'All', value: 'all' },
    { text: 'Africa', value: 'africa' },
    { text: 'America', value: 'americas' },
    { text: 'Asia', value: 'asia' },
    { text: 'Europe', value: 'europe' },
    { text: 'Oceania', value: 'oceania' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  select(region: any): void {
    this.placeholderText = region.text;
    this.regionOnChange.emit(region.value);
  }

}
