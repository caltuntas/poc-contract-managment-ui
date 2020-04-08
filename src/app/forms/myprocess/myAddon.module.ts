import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { startNewProcessComponent } from './startNewProcess.component';
import { approveDataTaskComponent } from './approveDataTask.component';
import { talepComponent } from './talep.component';
import { hukukComponent } from './hukuk.component';


@NgModule({
  entryComponents: [startNewProcessComponent,approveDataTaskComponent, talepComponent, hukukComponent],
  declarations: [startNewProcessComponent,approveDataTaskComponent, talepComponent, hukukComponent],
  imports: [FormsModule],
  exports: [startNewProcessComponent,approveDataTaskComponent, talepComponent, hukukComponent]
})
export class MyAddonModule {}

export { startNewProcessComponent } from './startNewProcess.component';
export { approveDataTaskComponent } from './approveDataTask.component';
export { talepComponent } from './talep.component';
export { hukukComponent } from './hukuk.component';
