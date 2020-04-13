import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamundaRestService } from '../../services/camunda-rest.service';
import { StartProcessInstanceComponent } from '../general/start-process-instance.component'
import { ProcessData } from '../../models/ProcessData';

@Component({
  selector: 'startNewProcess',
  templateUrl: './startNewProcess.component.html',
  styleUrls: []
})
export class startNewProcessComponent extends StartProcessInstanceComponent {
  submitted:boolean = false;
  model = new ProcessData();

  constructor(route: ActivatedRoute,
    camundaRestService: CamundaRestService,) {
    super(route, camundaRestService);
  }

}
