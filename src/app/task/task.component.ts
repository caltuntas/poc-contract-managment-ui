import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CamundaRestService } from '../shared/services/camunda-rest.service';
import { Task } from '../shared/models/Task';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  history: Boolean;
  taskId: String;
  formKey: String;

  constructor(
    private camundaRestService: CamundaRestService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.history=false;
    if (this.route.params != null) {
      this.route.params.subscribe(params => {
        if (params['id'] != null) {
          this.taskId = params['id'];
          if (params['history'])
          this.history=true;
          this.getFormKey();
        }
      });
    }
  }

  getFormKey(): void {
    this.camundaRestService
      .getTaskFormKey(this.taskId)
      .subscribe(formKey => this.formKey = formKey.key);
  }
}
