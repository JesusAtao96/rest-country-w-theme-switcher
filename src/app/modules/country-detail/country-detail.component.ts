import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { CountryService } from '@data/api';
import { Country } from '@data/interfaces';

import { LoadingService } from '@shared/services';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html'
})
export class CountryDetailComponent implements OnInit, OnDestroy {
  country: Country;
  isLoading: boolean;
  paramsSubscription: Subscription;
  countrySubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private countriesService: CountryService
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params) => {
        this.getCountry(params.country);
      });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.countrySubscription.unsubscribe();
  }

  showLoadingIndicator(isShow: boolean): void {
    this.isLoading = isShow;
    this.loadingService.setShowLoadingIndicator(isShow);
  }

  getCountry(country: string): void {
    this.country = null;
    this.showLoadingIndicator(true);

    this.countrySubscription = this.countriesService.searchByCountry(country)
      .pipe(finalize(() => (this.showLoadingIndicator(false))))
      .subscribe(countries => {
        if (countries.length === 1) {
          this.country = countries[0];
          console.log(this.country);
        }
      });
  }

}
