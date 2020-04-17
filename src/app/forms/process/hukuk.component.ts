import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../shared/services/camunda-rest.service';
import { CompleteTaskComponent } from '../general/complete-task.component';
import { ProcessData } from '../../shared/models/ProcessData';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'hukukComponent',
  templateUrl: './hukuk.component.html',
  styleUrls: []
})
export class hukukComponent extends CompleteTaskComponent {
  submitted = false;
  model = new ProcessData();

  constructor(route: ActivatedRoute,
    router: Router,
    dialog: MatDialog,
    camundaRestService: CamundaRestService) {
    super(route, router, dialog, camundaRestService);
    this.route.params.subscribe(params => {
      const processIntanceId = params['processInstanceId'];
      const variableNames = Object.keys(this.model).join(',');
      this.loadExistingProcessVariables(processIntanceId, variableNames);
    });
  }

}
