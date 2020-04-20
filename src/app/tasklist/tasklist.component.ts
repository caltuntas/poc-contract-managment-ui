import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CamundaRestService } from '../shared/services/camunda-rest.service';
import { Task } from '../shared/models/Task';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  headerTitle: String
  displayedColumns: string[] = ['id', 'name', 'description', 'priority', 'test'];
  tasks: Task[] = null;
  taskId: String;
  formKey: String;
  listFn: String

  constructor(
    private camundaRestService: CamundaRestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.route.params != null) {
      this.route.params.subscribe(params => {
        if (params['fn'] != null) {
          this.listFn = params['fn'];
          if (this.listFn == "waiting") {
            this.headerTitle = "Bekleyen İşlerim";
            this.displayedColumns=['id', 'name', 'description', 'priority','test'];
          }
          else if (this.listFn == "action") {
            this.headerTitle = "Aksiyon Aldıklarım";
            this.displayedColumns=['id', 'name', 'description', 'priority'];
          }
          else if (this.listFn == "mytasks") {
            this.headerTitle = "Taleplerim";
            this.displayedColumns=['id', 'name', 'description', 'priority'];
          }
          else {
            this.headerTitle = "Bekleyen İşlerim";
          }
          this.getTasks();
        }
      });
    }
  }

  getTasks(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (this.listFn == "waiting")
      this.camundaRestService
        .getTasksByAssignee(currentUser)
        .subscribe(tasks => {
          tasks.forEach(function (item) {
            this.camundaRestService.getHistoryVariablesForTask(item.processInstanceId)
              .subscribe(fields => {
                item.variables = {};
                fields.forEach(function (fi) {
                  item.variables[fi.name] = fi.value;
                });
              });
          }, this);
          this.tasks = tasks;
        });
    else if (this.listFn == "mytasks")
      this.camundaRestService
        .getTasksByOwner(currentUser)
        .subscribe(tasks => {
          tasks.forEach(function (item) {
            this.camundaRestService.getHistoryVariablesForTask(item.processInstanceId)
              .subscribe(fields => {
                item.variables = {};
                fields.forEach(function (fi) {
                  item.variables[fi.name] = fi.value;
                });
              });
          }, this);
          this.tasks = tasks;
        });
    else if (this.listFn == "action") {
      this.camundaRestService
        .getTasksByAction(currentUser)
        .subscribe(tasks => {
          tasks.forEach(function (item) {
            this.camundaRestService.getHistoryVariablesForTask(item.processInstanceId)
              .subscribe(fields => {
                item.variables = {};
                fields.forEach(function (fi) {
                  item.variables[fi.name] = fi.value;
                });
              });
          }, this);
          this.tasks = tasks;
        });
    }
  }

}
