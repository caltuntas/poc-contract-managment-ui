import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { startNewProcessComponent } from './startNewProcess.component';
import { approveDataTaskComponent } from './approveDataTask.component';
import { talepComponent } from './talep.component';
import { hukukComponent } from './hukuk.component';
import { satinalmaComponent } from './satinalma.component';
import { arsivComponent } from './arsiv.component';


@NgModule({
  entryComponents: [startNewProcessComponent, approveDataTaskComponent, talepComponent, hukukComponent, satinalmaComponent, arsivComponent],
  declarations: [startNewProcessComponent, approveDataTaskComponent, talepComponent, hukukComponent, satinalmaComponent, arsivComponent],
  imports: [FormsModule],
  exports: [startNewProcessComponent, approveDataTaskComponent, talepComponent, hukukComponent, satinalmaComponent, arsivComponent]
})
export class MyAddonModule { }

export { startNewProcessComponent } from './startNewProcess.component';
export { approveDataTaskComponent } from './approveDataTask.component';
export { talepComponent } from './talep.component';
export { hukukComponent } from './hukuk.component';
export { satinalmaComponent } from './satinalma.component';
export { arsivComponent } from './arsiv.component';
