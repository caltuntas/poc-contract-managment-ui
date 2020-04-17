import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatListModule, MatSidenavModule, MatExpansionModule, MatTableModule, MatSelectModule, MatMenuModule, MatDialogModule, } from '@angular/material';
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
    MatDialogModule,
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
    MatDialogModule,
  ],

})

export class MyMaterialModule { }
