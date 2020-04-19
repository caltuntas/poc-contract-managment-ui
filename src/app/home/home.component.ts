import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';

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
  currentUser;
  processDefinitions;
  title = 'Sözleşme Yönetimi';
  @ViewChild('sideNav', { read: MatSidenav }) sideNav: MatSidenav;
  navMode = 'side';

  constructor(
    private authService: AuthService,
    private observableMedia: MediaObserver,
    private camundaRestService: CamundaRestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
     this.currentUser = localStorage.getItem('currentUser');
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

    this.getProcessDefinitions();
  }

  getProcessDefinitions(): void {
    this.camundaRestService
      .getProcessDefinitions()
      .subscribe(processDefinitions => this.processDefinitions = processDefinitions);
  }

  startProcess(processKey) {
    

    this.camundaRestService.getHistoryProcessInstanceCount(processKey).subscribe(
      serviceResult => {
        let processCount = serviceResult.count+1;
        let variables = {
          variables: {
            'workflowNo': { type: 'integer', value: processCount },
            'startUser': { type: 'String', value: this.currentUser }
          }
        };
        console.log(variables);
        this.camundaRestService.postProcessInstance(processKey, variables).subscribe(
          serviceResult => {
            let processId = serviceResult.id;

            this.camundaRestService.getTasksByProcessId(processId).subscribe(
              taskResult => {
                let taskId = taskResult[0].id;

                this.router.navigate(['/tasks/:id/:processInstanceId/0', { id: taskId, processInstanceId: processId }]);
              }
            );
          }
        );
      }
    );


  }

  closeNav() {
    if (this.navMode == "over")
      this.sideNav.close();
  }

  logout() {
    this.authService.logout();
  }
}

