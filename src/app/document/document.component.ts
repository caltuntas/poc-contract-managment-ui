import { Component, OnInit, Inject } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  externalUrl = 'http://localhost:9001/p/';
  url: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DocumentComponent>,
    ) {
  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.externalUrl + this.data.documentNumber);
  }
  close() {
    this.dialogRef.close();
  }
}
