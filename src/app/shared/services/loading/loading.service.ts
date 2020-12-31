import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isShow: boolean;

  constructor() { }

  get isLoading(): boolean {
    return this.isShow;
  }

  setShowLoadingIndicator(isShow: boolean): void {
    this.isShow = isShow;
  }
}
