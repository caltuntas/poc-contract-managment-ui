import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../services/camunda-rest.service';
import { CompleteTaskComponent } from '../general/complete-task.component';
import { ProcessData } from '../../models/ProcessData';

@Component({
  selector: 'satinalmaComponent',
  templateUrl: './satinalma.component.html',
  styleUrls: []
})
export class satinalmaComponent extends CompleteTaskComponent {
  submitted:boolean = false;
  model = new ProcessData();

  constructor(route: ActivatedRoute,
    router: Router,
    camundaRestService: CamundaRestService) {
    super(route, router, camundaRestService);
    this.route.params.subscribe(params => {
      const taskId = params['id'];
      const processIntanceId = params['processInstanceId'];
      const variableNames = Object.keys(this.model).join(',');
      this.loadExistingProcessVariables(processIntanceId, variableNames);
    });
  }

}
