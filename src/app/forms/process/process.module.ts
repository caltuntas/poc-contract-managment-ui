import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { talepComponent } from './talep.component';
import { hukukComponent } from './hukuk.component';
import { satinalmaComponent } from './satinalma.component';
import { arsivComponent } from './arsiv.component';


@NgModule({
  entryComponents: [talepComponent, hukukComponent, satinalmaComponent, arsivComponent],
  declarations: [talepComponent, hukukComponent, satinalmaComponent, arsivComponent],
  imports: [FormsModule, CommonModule],
  exports: [talepComponent, hukukComponent, satinalmaComponent, arsivComponent]
})
export class ProcessModule { }

export { talepComponent } from './talep.component';
export { hukukComponent } from './hukuk.component';
export { satinalmaComponent } from './satinalma.component';
export { arsivComponent } from './arsiv.component';
