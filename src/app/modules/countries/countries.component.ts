import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { finalize } from 'rxjs/operators';

import { CountryService } from '@data/api';
import { Country } from '@data/interfaces';

import { LoadingService } from '@shared/services';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.6s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.6s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class CountriesComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  isActive: boolean;
  isLoading = true;

  constructor(
    private countriesService: CountryService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  ngOnDestroy(): void {}

  countryTrackBy(index: number, country: Country): string {
    return country.name;
  }

  scrollOnChange(): void {
    this.isActive = false;
  }

  showLoadingIndicator(isShow: boolean): void {
    this.isLoading = isShow;
    this.loadingService.setShowLoadingIndicator(isShow);
  }

  getAllCountries(): void {
    this.countries = [];
    this.showLoadingIndicator(true);

    this.countriesService
      .getCountries()
      .pipe(finalize(() => (this.showLoadingIndicator(false))))
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  getCountriesByText(param: string): void {
    if (!param) {
      this.getAllCountries();
      return;
    }

    this.countries = [];
    this.showLoadingIndicator(true);

    this.countriesService
      .searchByCountry(param)
      .pipe(finalize(() => (this.showLoadingIndicator(false))))
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  getCountriesByRegion(region: string): void {
    if (region === 'all') {
      this.getAllCountries();
      return;
    }

    this.countries = [];
    this.showLoadingIndicator(true);
    this.countriesService
      .searchByRegion(region)
      .pipe(finalize(() => (this.showLoadingIndicator(false))))
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  goToCountryDetail(country: string): void {
    this.router.navigate(['', country.toLowerCase()]);
  }
}
