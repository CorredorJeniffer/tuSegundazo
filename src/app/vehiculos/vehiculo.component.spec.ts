import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoComponent } from './vehiculo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DebugElement } from '@angular/core';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo.class';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';

describe('VehiculosComponent', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ VehiculoComponent ],
      providers:[VehiculoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;
    for(let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.vehiculos.push(vehiculo);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(3);
  });
  it("Component has a table head", () => {
    expect(debug.query(By.css("thead")).childNodes.length).toBeGreaterThanOrEqual(1);
  });
});
