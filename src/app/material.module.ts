import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule, MatSidenavModule, MatExpansionModule, MatTableModule, MatSelectModule, MatMenuModule, } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatInputModule,
  ],

  exports: [
    MatNativeDateModule,
    FormsModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatInputModule,
  ],

})

export class MyMaterialModule { }
