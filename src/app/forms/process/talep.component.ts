import { DocumentComponent } from '../../document/document.component';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../shared/services/camunda-rest.service';
import { CompleteTaskComponent } from '../general/complete-task.component';
import { ProcessData } from '../../shared/models/ProcessData';
import { FormGroup } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'talepComponent',
  templateUrl: './talep.component.html',
  styleUrls: []
})
export class talepComponent extends CompleteTaskComponent {
  formGroup: FormGroup;
  submitted = false;
  model = new ProcessData();
  sablonlar = [
    { id: 1, name: 'Kampanya Sözleşme Şablonu' },
    { id: 2, name: 'Çerçeve Gizlilik Sözleşmesi Şablonu' },
    { id: 3, name: 'Örnek Şablon 1' },
    { id: 4, name: 'Örnek Şablon 2' },
  ];

  grupSirketleri = [
    { id: 1, name: 'REHBERLİK HİZMETLERİ SERVİSİ A.Ş.' },
    { id: 2, name: 'Lifecell Ventures' },
    { id: 3, name: 'BELTEL TELEKOMİNİKASYON HİZMETLERİ A.Ş' },
    { id: 4, name: 'TURKCELL GAYRİMENKUL HİZMETLERİ A.Ş.' },
  ];

  karsiTarafUnvanlari = [
    { id: 1, name: 'Ericsson' },
    { id: 2, name: 'Ericsson ARGE' },
    { id: 3, name: 'Ericsson Global' },
  ];

  bedelliSecenekleri = [
    { id: 'Evet', value: 'Evet' },
    { id: 'Hayir', value: 'Hayır' },
  ];

  constructor(route: ActivatedRoute,
    router: Router,
    dialog: MatDialog,
    camundaRestService: CamundaRestService) {
    super(route, router, dialog, camundaRestService);
    this.route.params.subscribe(params => {
      const processInstanceId = params['processInstanceId'];
      const variableNames = Object.keys(this.model).join(',');
      this.loadExistingProcessVariables(processInstanceId, variableNames).add(() => {
        console.log('loadExistingProcessVariables is completed');
        const min = Math.ceil(100000);
        const max = Math.floor(999999);
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        this.model.sozlesmeNo = this.model.sozlesmeNo || randomNumber.toString();
      });
    });
  }


}
