import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafesComponent } from './cafes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafesComponent],
  exports: [CafesComponent]
})
export class CafesModule { }
