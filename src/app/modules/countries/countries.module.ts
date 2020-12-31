import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared/shared.module';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CountryComponent } from './components/country/country.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { ButtonScrollTopComponent } from './components/button-scroll-top/button-scroll-top.component';

@NgModule({
  declarations: [CountriesComponent, CountryComponent, SearchBoxComponent, SelectBoxComponent, ButtonScrollTopComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
