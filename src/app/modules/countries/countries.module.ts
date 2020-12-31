import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CountryComponent } from './components/country/country.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';

@NgModule({
  declarations: [CountriesComponent, CountryComponent, SearchBoxComponent, SelectBoxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
