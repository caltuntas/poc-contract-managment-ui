import { Component, OnInit,
  ViewChild, ViewContainerRef,
  ComponentFactoryResolver,
  OnChanges, SimpleChange, Input } from '@angular/core';

import { TasklistComponent } from './tasklist/tasklist.component';
import * as MyAddon from './forms/process/process.module';

@Component({
  selector: 'generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: []
})
export class GenericForm implements OnChanges {
  @ViewChild('dynamic', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  @Input() formKey: String = null;
  @Input() taskId: String = null;
  private rootViewContainer = null;
  private myAddonModule = null;

  constructor(private factoryResolver: ComponentFactoryResolver) {

  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (const propName in changes) {
      if (propName === 'formKey' && changes[propName].currentValue != null) {
        this.loadForm(changes[propName].currentValue);
      }
    }
  }

  loadForm(formKey: String): void {
    this.setRootViewContainerRef(this.viewContainerRef);
    const [, form] = formKey.match(/(\w+).html/) || [, formKey];
    this.addDynamicComponent(form);
  }

  public setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  public addDynamicComponent(formKey: String) {
    console.log(MyAddon);
    console.log(formKey);
    const factory = this.factoryResolver.resolveComponentFactory(MyAddon[formKey + 'Component']);
    const component = factory.create(this.rootViewContainer.parentInjector);

    this.rootViewContainer.clear();
    this.rootViewContainer.insert(component.hostView);
  }
}
