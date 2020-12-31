import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from '@data/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private themeSwitcher: ThemeSwitcherService) { }

  ngOnInit(): void {
    this.themeSwitcher.loadTheme();
  }

  changeTheme(): void {
    this.themeSwitcher.isDarkTheme = !this.themeSwitcher.isDarkTheme;
    this.themeSwitcher.changeTheme();
  }

}
