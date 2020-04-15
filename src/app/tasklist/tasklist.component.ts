import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CamundaRestService } from '../shared/services/camunda-rest.service';
import { Task } from '../shared/models/Task';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'priority', 'test'];
  tasks: Task[] = null;
  taskId: String;
  formKey: String;

  constructor(
    private camundaRestService: CamundaRestService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.camundaRestService
      .getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

}
