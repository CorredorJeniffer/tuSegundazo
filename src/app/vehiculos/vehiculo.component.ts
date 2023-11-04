import { Component, OnInit } from '@angular/core';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo.class';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css'],
})
export class VehiculoComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  totalRenault:number=0;
  totalChevrolet:number=0;
  totalNissan:number=0;
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.getVehiculos();
  }
  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.totalRenault=this.vehiculos.filter(item => item.marca === 'Renault').length;
      this.totalChevrolet=this.vehiculos.filter(item => item.marca === 'Chevrolet').length;
      this.totalNissan=this.vehiculos.filter(item => item.marca === 'Nissan').length;
    });
  }
}
