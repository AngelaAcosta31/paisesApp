import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisTablaComponent } from './pais-tabla/pais-tabla.component';
import { RouterModule } from '@angular/router';
import { PaisInputComponent } from './pais-input/pais-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaisTablaComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  exports: [
    PaisTablaComponent,
    PaisInputComponent
  ]
})
export class ComponentsModule { }
