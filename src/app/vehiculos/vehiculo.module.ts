import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoComponent } from './vehiculo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[VehiculoComponent],
  declarations: [VehiculoComponent]

})
export class VehiculoModule { }
