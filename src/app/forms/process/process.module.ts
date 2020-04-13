import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { talepComponent } from './talep.component';
import { hukukComponent } from './hukuk.component';
import { satinalmaComponent } from './satinalma.component';
import { arsivComponent } from './arsiv.component';
import { MyMaterialModule } from '../../material.module';


@NgModule({
  entryComponents: [talepComponent, hukukComponent, satinalmaComponent, arsivComponent],
  declarations: [talepComponent, hukukComponent, satinalmaComponent, arsivComponent],
  imports: [FormsModule,ReactiveFormsModule, CommonModule, MyMaterialModule],
  exports: [talepComponent, hukukComponent, satinalmaComponent, arsivComponent]
})
export class ProcessModule { }

export { talepComponent } from './talep.component';
export { hukukComponent } from './hukuk.component';
export { satinalmaComponent } from './satinalma.component';
export { arsivComponent } from './arsiv.component';
