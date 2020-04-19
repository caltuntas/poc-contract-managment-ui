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
  displayedColumns: string[] = ['id', 'name', 'description', 'key', 'resource', 'action'];

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

  addNewProcess() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    // dialogConfig.width = '400px';
    // dialogConfig.height = '400px';
    // dialogConfig.panelClass = 'my-dialog';


    const dialogRef = this.dialog.open(UploadProcessComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }

}
