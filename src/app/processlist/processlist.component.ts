import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from '../shared/services/camunda-rest.service'

@Component({
  selector: 'app-processlist',
  templateUrl: './processlist.component.html',
  styleUrls: ['./processlist.component.css']
})
export class ProcesslistComponent implements OnInit {
  processDefinitions;
  private fileToUpload: File = null;
  private SUCCESS: boolean = false;
  displayedColumns: string[] = ['id', 'name', 'description', 'key', 'resource', 'action'];

  constructor(private camundaRestService: CamundaRestService) { }

  ngOnInit() {
    this.getProcessDefinitions();
  }

  getProcessDefinitions(): void {
    this.camundaRestService
      .getProcessDefinitions()
      .subscribe(processDefinitions => this.processDefinitions = processDefinitions);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.camundaRestService.deployProcess(this.fileToUpload).subscribe(data => {
      this.SUCCESS = true;
      }, error => {
        console.log(error);
    });
  }

}
