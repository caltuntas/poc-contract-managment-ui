import { Component, ViewChild, OnInit } from '@angular/core';
import { MatButton, MatSidenav, MatSidenavContainer } from '@angular/material';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sözleşme Yönetimi';
  @ViewChild('sideNav', {read: MatSidenav}) sideNav: MatSidenav;

  navMode = 'side';

  constructor(
    private observableMedia: MediaObserver) { }

  ngOnInit() {
    if (this.observableMedia.isActive('xs') || this.observableMedia.isActive('sm')) {
      this.navMode = 'over';
    }

    this.observableMedia.media$
      .subscribe((change: MediaChange) => {
        switch (change.mqAlias) {
          case 'xs':
          case 'sm':
            this.navMode = 'over';
            this.sideNav.close();
            break;
          default:
            this.navMode = 'side';
            this.sideNav.open();
            break;
        }
      });
  }
}
