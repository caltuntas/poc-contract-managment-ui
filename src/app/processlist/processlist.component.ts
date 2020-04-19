import { ProcessDiagramComponent } from './../process-diagram/process-diagram.component';
import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from '../shared/services/camunda-rest.service'
import { UploadProcessComponent } from '../upload-process/upload-process.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-processlist',
  templateUrl: './processlist.component.html',
  styleUrls: ['./processlist.component.css']
})
export class ProcesslistComponent implements OnInit {
  processDefinitions;
  processXml;
  displayedColumns: string[] = ['id', 'name', 'description', 'key', 'resource', 'diagram', 'action'];

  constructor(
    private dialog: MatDialog,
    private camundaRestService: CamundaRestService) { }

  ngOnInit() {
    this.getProcessDefinitions();
  }

  getProcessDefinitions(): void {
    this.camundaRestService
      .getProcessDefinitions()
      .subscribe(processDefinitions => this.processDefinitions = processDefinitions);
  }

  showDiagram(e) {
    this.camundaRestService
      .getProcessDefinitionXml(e)
      .subscribe(result => {

        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
          xml: result.bpmn20Xml,
        };
        dialogConfig.maxWidth = '80vw !important';
        dialogConfig.width = '80vw';
        dialogConfig.panelClass = 'my-dialog';

        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(ProcessDiagramComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(
          data => console.log('Dialog output:', data)
        );
        console.log(result);
      });
  }

  addNewProcess() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(UploadProcessComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }

}
