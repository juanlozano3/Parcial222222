import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pais.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaisComponent, PaisDetailComponent ],
  exports: [PaisComponent]
})
export class PaisModule { }
