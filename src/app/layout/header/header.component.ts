import { Component, HostListener, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationStart,
  Router,
  Scroll,
} from '@angular/router';

import { Observable } from 'rxjs';

import { CoreService } from './../../core/services/core.service';

import { APP_NAVIGATION, NavigationItem } from './header.navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent implements OnInit {
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                          PROPERTIES                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private _isHomePage: boolean = false;
  private _isMenuOpen: boolean = false;

  imageUrl?: Observable<string>;

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                        CONSTRUCTORS                         *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  constructor(
    private readonly _coreService: CoreService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    // Check if the current route is the home page
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._isHomePage = event.url === '/';
      }

      if (event instanceof Scroll) {
        this._isHomePage = event.routerEvent.url === '/';
      }
    });

    // Get the image URL
    this.imageUrl = this._coreService.api.other.getHeaderImageUrl();
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PUBLIC                            *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  public closeMenu(): void {
    if (this._isMobile && this._isMenuOpen) {
      this.toggleMenu();
    }
  }

  public toggleMenu(): void {
    this._isMenuOpen = !this._isMenuOpen;
    document.body.style.overflow = this._isMenuOpen ? 'hidden' : '';
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any): void {
    if (event.target.innerWidth > 991 && this._isMenuOpen) {
      this.toggleMenu();
    }
  }

  /* * * * * * * * * * * * * * * *\
  |*           GETTERS           *|
  \* * * * * * * * * * * * * * * */

  public get navigationItems(): NavigationItem[] {
    return APP_NAVIGATION.filter((nav) => nav.displayed);
  }

  public get isHomePage(): boolean {
    return this._isHomePage;
  }

  public get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\
  |*                           PRIVATE                           *|
  \* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

  private get _isMobile(): boolean {
    return window.innerWidth < 992;
  }
}
