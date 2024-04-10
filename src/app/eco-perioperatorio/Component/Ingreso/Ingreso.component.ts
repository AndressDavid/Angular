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
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { ModalLimpiarComponent } from '../Modales/Modal-Limpiar/modal-limpiar/modal-limpiar.component';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalIngresoComponent,
    CabeceraComponent,
    ModalLimpiarComponent,
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

        // data.forEach(
        //   ({
        //     numeroDocumento,
        //     primerNombre,
        //     segundoNombre,
        //     primerApellido,
        //     segundoApellido,
        //     numeroIngreso,
        //   }: any) => {
        //     const procedimiento = {
        //       NIDPAC: numeroDocumento,
        //       NM1PAC: primerNombre,
        //       NM2PAC: segundoNombre,
        //       AP1PAC: primerApellido,
        //       AP2PAC: segundoApellido,
        //       NIGING: numeroIngreso,
        //     };

        //     this.ingreso.push(procedimiento);
        //   }
        // );

        this.OutObtenerIngreso.emit(this.ingreso);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public invalidFeedback: boolean = true;

  public ingForm = new FormGroup({
    campoValor: new FormControl(''),
  });

  public validacionModal: boolean = false;
  @Output() OutValidacionModal: EventEmitter<boolean> = new EventEmitter();

  public limpiarModal: boolean = false;
  @Output() OutCleanModal: EventEmitter<boolean> = new EventEmitter();

  public ingresoValido: boolean = false;
  @Output() OutIngresoValido: EventEmitter<boolean> = new EventEmitter();

  public ingresoNoValido: boolean = true;
  @Output() OutIngresoNoValido: EventEmitter<boolean> = new EventEmitter();

  public ingresoCabeceraValido: boolean = false;
  @Output() OutIngresoCabeceraValido: EventEmitter<boolean> =
    new EventEmitter();

  close(event: boolean) {
    this.validacionModal = event;
    this.limpiarModal = event;
  }

  onSubmit() {
    if (this.ingForm.controls.campoValor.value) {
      this.invalidFeedback = true;
      this.validacionModal = false;
      this.ingresoValido = true;
      this.ingresoCabeceraValido = true;
      this.ingForm.controls.campoValor.disable();
    } else {
      this.invalidFeedback = false;
      this.validacionModal = true;
      this.ingresoValido = false;
      this.ingresoCabeceraValido = false;
    }
    this.OutValidacionModal.emit(this.validacionModal);
    this.OutIngresoValido.emit(this.ingresoValido);
    this.OutIngresoCabeceraValido.emit(this.ingresoCabeceraValido);
  }

  onLimpiar() {
    this.ingForm.reset();
    this.ingForm.controls.campoValor.enable();
    this.ingresoNoValido = false;
    this.ingresoCabeceraValido = false;
    this.limpiarModal = true;

    this.OutIngresoNoValido.emit(this.ingresoNoValido);
    this.OutCleanModal.emit(this.limpiarModal);

    return false;
  }
}
