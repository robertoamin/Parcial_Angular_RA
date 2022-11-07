import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCafesComponent } from './listado-cafes/listado-cafes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ListadoCafesComponent],
  exports: [ListadoCafesComponent]
})
export class CafesModule { }
