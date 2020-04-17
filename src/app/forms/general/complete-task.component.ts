import { DocumentComponent } from '../../document/document.component';
import { Observable, Subscription } from 'rxjs';
import { CamundaRestService } from '../../shared/services/camunda-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

export class CompleteTaskComponent {
  model
  submitted
  route: ActivatedRoute
  router: Router
  camundaRestService: CamundaRestService

  constructor(route: ActivatedRoute,
    router: Router,
    private dialog: MatDialog,
    camundaRestService: CamundaRestService,
    ) {
      this.route = route;
      this.router = router;
      this.camundaRestService = camundaRestService;
  }
  onSubmit() {
    this.route.params.subscribe(params => {
      const taskId = params['id'];
      const variables = this.generateVariablesFromFormFields();
      this.camundaRestService.postCompleteTask(taskId, variables).subscribe();
      this.submitted = true;
      this.router.navigate(['/tasklist']);
    });
  }
  loadExistingVariables(taskId: String, variableNames: String) {
    this.camundaRestService.getVariablesForTask(taskId, variableNames).subscribe((result) => {
      this.generateModelFromVariables(result);
    });
  }
  loadExistingProcessVariables(taskId: String, variableNames: String): Subscription {
    return this.camundaRestService.getVariablesForProcessInstance(taskId, variableNames).subscribe((result) => {
      this.generateModelFromVariables(result);
    });
  }
  generateModelFromVariables(variables) {
    Object.keys(variables).forEach((variableName) => {
      this.model[variableName] = variables[variableName].value;
    });
  }
  generateVariablesFromFormFields() {
    const variables = {
      variables: { }
    };
    Object.keys(this.model).forEach((field) => {
      variables.variables[field] = {
        value: this.model[field]
      };
    });

    return variables;
  }

  openDocument() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      documentNumber: this.model.sozlesmeNo,
      title: 'Sözleşme Dökümanı',
    };
    dialogConfig.width = '1000px';
    dialogConfig.height = '1000px';
    dialogConfig.panelClass = 'my-dialog';


    const dialogRef = this.dialog.open(DocumentComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }
}
