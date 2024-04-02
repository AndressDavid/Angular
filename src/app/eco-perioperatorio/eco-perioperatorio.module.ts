import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ECOPerioperatorioComponent } from './eco-perioperatorio.component';
import { IngresoComponent } from './Component/Ingreso/Ingreso.component';
import { ProcedimientosComponent } from './Component/Procedimientos/Procedimientos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IngresoComponent,
    ProcedimientosComponent,
    HttpClientModule,
  ],
  declarations: [ECOPerioperatorioComponent],
})
export class ECOPerioperatorioModule {}
