import { Component, OnInit, Inject } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Guid } from "guid-typescript";
import { CommonModule } from '@angular/common';
declare var DocsAPI: any;
function documentViewer(currentUser, title, documentNumber, uniqueuser) {
  new DocsAPI.DocEditor("documentViewer", {
    "document": {
      "fileType": "docx",
      "key": "pocdoc_" + documentNumber,
      "title": title + ".docx",
      "url": "http://10.0.75.1:4200/assets/Template.docx"
    },
    "documentType": "text",
    "editorConfig": {
      "user": {
        "id": "user_" + uniqueuser,
        "name": currentUser
      },
      "customization": {
        "chat": true,
        "logo": {
          "image": "https://banner2.cleanpng.com/20180408/zoq/kisspng-ericsson-mobile-phones-5g-logo-company-home-appliance-5aca811d983944.6085368015232207656235.jpg",
          "imageEmbedded": "https://banner2.cleanpng.com/20180408/zoq/kisspng-ericsson-mobile-phones-5g-logo-company-home-appliance-5aca811d983944.6085368015232207656235.jpg",
          "url": ""
        },
        "comments": true,
        "mentionShare": true,
        "spellcheck": true,
        "help": false,
        "hideRightMenu": false
      },
    },
  });
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  currentUser;
  url: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DocumentComponent>,
  ) {
  }

  ngOnInit() {
    console.log(this.data.type);
    this.currentUser = localStorage.getItem('currentUser');
    if (this.data.type == "2")
      this.url = this.sanitizer
      .bypassSecurityTrustResourceUrl("https://yopad.eu/p/poc_doc_"+this.data.documentNumber+"?lang=tr&userName="+this.currentUser);
    else
      documentViewer(this.currentUser, this.data.title + " - " + this.data.documentNumber, this.data.documentNumber, Guid.create());
  }
  close() {
    this.dialogRef.close();
  }
}
