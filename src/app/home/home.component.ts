import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";

import { CamundaRestService } from '../shared/services/camunda-rest.service'
import { MatSidenav } from '@angular/material';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Sözleşme Yönetimi';
  @ViewChild('sideNav', {read: MatSidenav}) sideNav: MatSidenav;

  navMode = 'side';

  constructor(
    private authService: AuthService,
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

  logout() {
    this.authService.logout();
  }
}

