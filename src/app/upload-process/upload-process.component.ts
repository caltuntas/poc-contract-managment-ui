import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from '../shared/services/camunda-rest.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-upload-process',
  templateUrl: './upload-process.component.html',
  styleUrls: ['./upload-process.component.scss']
})
export class UploadProcessComponent implements OnInit {
  private fileToUpload: File = null;
  private SUCCESS = false;
  constructor(
    private dialog: MatDialog,
    private camundaRestService: CamundaRestService) { }

  ngOnInit() {
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
