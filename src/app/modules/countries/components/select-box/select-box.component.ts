import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Region } from '@data/interfaces';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectBoxComponent implements OnInit {
  isSelectOpen: boolean;
  placeholderText = 'Filter by Region';

  @Output() regionOnChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() checkOnChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() set isActive(event) {
    this.isSelectOpen = event;
  };


  regions: Region[] = [
    { text: 'All', value: 'all' },
    { text: 'Africa', value: 'africa' },
    { text: 'America', value: 'americas' },
    { text: 'Asia', value: 'asia' },
    { text: 'Europe', value: 'europe' },
    { text: 'Oceania', value: 'oceania' },
  ];

  constructor() {
  }

  ngOnInit(): void {}

  detectCheckChange(): void {
    this.checkOnChange.emit(this.isSelectOpen);
  }

  select(region: Region): void {
    this.placeholderText = region.text;
    this.regionOnChange.emit(region.value);
  }

}
