import { Component, OnInit, Inject } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
declare var DocsAPI: any;
function documentViewer(currentUser, title) {
  new DocsAPI.DocEditor("documentViewer", {
    "document": {
      "fileType": "docx",
      "key": "Khirz6zTPdfd7",
      "title": title + ".docx",
      "url": "http://192.168.99.1:4200/assets/Template.docx"
    },
    "documentType": "text",
    "editorConfig": {
      "user": {
        "id": "78e1e841",
        "name": currentUser
      }
    }
  });
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  currentUser;
  //externalUrl = 'https://video.etherpad.com/p/pocdemo_';
  url: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DocumentComponent>,
  ) {
  }

  ngOnInit() {
    //this.url=this.sanitizer.bypassSecurityTrustResourceUrl("https://parlakd.onlyoffice.eu/Products/Files/doceditor.aspx?fileid=5384871");
    this.currentUser = localStorage.getItem('currentUser');
    documentViewer(this.currentUser, this.data.title + " - " + this.data.documentNumber);
  }
  close() {
    this.dialogRef.close();
  }
}
