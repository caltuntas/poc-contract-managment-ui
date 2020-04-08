import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { startNewProcessComponent } from './startNewProcess.component';
import { approveDataTaskComponent } from './approveDataTask.component';
import { talepComponent } from './talep.component';


@NgModule({
  entryComponents: [startNewProcessComponent,approveDataTaskComponent, talepComponent],
  declarations: [startNewProcessComponent,approveDataTaskComponent, talepComponent],
  imports: [FormsModule],
  exports: [startNewProcessComponent,approveDataTaskComponent, talepComponent]
})
export class MyAddonModule {}

export { startNewProcessComponent } from './startNewProcess.component';
export { approveDataTaskComponent } from './approveDataTask.component';
export { talepComponent } from './talep.component';
