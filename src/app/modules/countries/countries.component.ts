import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CountryService } from '@data/api';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit, OnDestroy {
  countries: any[] = [];

  constructor(private countriesService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  ngOnDestroy(): void {}

  getAllCountries(): void {
    this.countries = [];
    this.countriesService.getCountries()
      .subscribe(countries => {
        this.countries = countries;
      });
  }

  getCountriesByText(param: string): void {
    if (!param) {
      this.getAllCountries();
      return;
    }

    this.countries = [];
    this.countriesService.searchByCountry(param)
      .subscribe(countries => {
        this.countries = countries;
      });
  }

  getCountriesByRegion(region: string): void {
    if (region === 'all') {
      this.getAllCountries();
      return;
    }

    this.countries = [];
    this.countriesService.searchByRegion(region)
      .subscribe(countries => {
        this.countries = countries;
      });
  }

  goToCountryDetail(country: string): void {
    this.router.navigate(['', country.toLowerCase()]);
  }

}
