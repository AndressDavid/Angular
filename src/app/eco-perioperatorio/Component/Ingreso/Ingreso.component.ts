import { CommonModule } from '@angular/common';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ModalIngresoComponent } from '../Modales/Modal-Ingreso/Modal-Ingreso.component';
import { IngresoService } from './Servicios-Ingreso/Ingreso.service';
import { Iingreso } from './Interfaces-Ingreso/Iingreso';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalIngresoComponent,
  ],
  templateUrl: './Ingreso.component.html',
  styleUrl: './Ingreso.component.css',
})
export class IngresoComponent implements OnInit {
  public ingreso: Iingreso[] = [];

  @Output() OutObtenerIngreso: EventEmitter<Iingreso[]> = new EventEmitter();

  constructor(public ingresoService: IngresoService) {}

  ngOnInit(): void {
    this.obtenerIngreso();
  }

  obtenerIngreso() {
    this.ingresoService.obtenerIngreso().subscribe(
      (respuesta) => {
        const { data } = respuesta;
        this.ingreso = data;

        console.log(this.ingreso);

        this.OutObtenerIngreso.emit(this.ingreso);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public isFormSubmit: boolean = true;

  public ingForm = new FormGroup({
    campoValor: new FormControl(''),
  });

  public validacionModal: boolean = false;
  @Output() OutValidacionModal: EventEmitter<boolean> = new EventEmitter();

  public ingresoValido: boolean = false;
  @Output() OutIngresoValido: EventEmitter<boolean> = new EventEmitter();

  close(event: boolean) {
    this.validacionModal = event;
  }

  onSubmit() {
    if (this.ingForm.controls.campoValor.value) {
      this.isFormSubmit = true;
      this.validacionModal = false;
      this.ingresoValido = true;
    } else {
      this.isFormSubmit = false;
      this.validacionModal = true;
      this.ingresoValido = false;
    }
    this.OutValidacionModal.emit(this.validacionModal);
    this.OutIngresoValido.emit(this.ingresoValido);
  }

  onLimpiar() {
    this.ingForm.reset();
    return false;
  }
}
