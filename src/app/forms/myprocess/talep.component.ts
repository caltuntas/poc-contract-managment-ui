import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamundaRestService } from '../../services/camunda-rest.service';
import { CompleteTaskComponent } from '../general/complete-task.component';
import { MyProcessData } from '../../model/MyProcessData';

@Component({
  selector: 'talepComponent',
  templateUrl: './talep.component.html',
  styleUrls: []
})
export class talepComponent extends CompleteTaskComponent {
  submitted = false;
  model = new MyProcessData();
  sablonlar = [
    {id: 1 , name: 'Kampanya Sözleşme Şablonu'},
    {id: 2, name: 'Çerçeve Gizlilik Sözleşmesi Şablonu'},
    {id: 3, name: 'Örnek Şablon 1'},
    {id: 4, name: 'Örnek Şablon 2'},
  ];

  grupSirketleri = [
    {id: 1 , name: 'REHBERLİK HİZMETLERİ SERVİSİ A.Ş.'},
    {id: 2, name: 'Lifecell Ventures'},
    {id: 3, name: 'BELTEL TELEKOMİNİKASYON HİZMETLERİ A.Ş'},
    {id: 4, name: 'TURKCELL GAYRİMENKUL HİZMETLERİ A.Ş.'},
  ];

  karsiTarafUnvanlari = [
    {id: 1 , name: 'Ericsson'},
    {id: 2, name: 'Ericsson ARGE'},
    {id: 3, name: 'Ericsson Global'},
  ];

  bedelliSecenekleri = [
    {id: 'Evet' , value: 'Evet'},
    {id: 'Hayir', value: 'Hayır'},
  ];

  constructor(route: ActivatedRoute,
    router: Router,
    camundaRestService: CamundaRestService) {
    super(route, router, camundaRestService);
    this.route.params.subscribe(params => {
      const taskId = params['processInstanceId'];
      const variableNames = Object.keys(this.model).join(',');
      this.loadExistingProcessVariables(taskId, variableNames);
    });
  }

}
