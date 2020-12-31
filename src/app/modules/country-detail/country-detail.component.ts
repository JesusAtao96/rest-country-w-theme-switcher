import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CountryService } from '@data/api';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html'
})
export class CountryDetailComponent implements OnInit, OnDestroy {
  country: any;
  paramsSubscription: Subscription;
  countrySubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params
      .subscribe((params) => {
        console.log(params);
        this.getCountry(params['country']);
      });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    this.countrySubscription.unsubscribe();
  }

  getCountry(country: string): void {
    this.countrySubscription = this.countriesService.searchByCountry(country)
      .subscribe(countries => {
        this.country = countries[0];
        console.log(this.country);
      });
  }

}
