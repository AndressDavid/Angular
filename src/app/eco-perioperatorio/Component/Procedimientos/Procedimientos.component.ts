import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProcedimientosService } from './Servicios-Proc/Procedimientos.service';
import { Iprocedimientos } from './Interfaces-Proc/Iprocedimientos';
import { ModalProcComponent } from '../Modales/Modal-Proc/Modal-Proc.component';
import { ModalSavedComponent } from '../Modales/Modal-Saved/Modal-Saved.component';

@Component({
  selector: 'app-procedimientos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalProcComponent,
    ModalSavedComponent,
  ],
  templateUrl: './Procedimientos.component.html',
  styleUrl: './Procedimientos.component.css',
})
export class ProcedimientosComponent implements OnInit {
  public listadoProcedimientos: Iprocedimientos[] = [];

  @Output() OutListadoProcedimientos: EventEmitter<Iprocedimientos[]> =
    new EventEmitter();

  constructor(public procedimientosService: ProcedimientosService) {}

  ngOnInit(): void {
    this.obtenerProcedimientos();
  }

  obtenerProcedimientos() {
    this.procedimientosService.obtenerListaProcedimientos().subscribe(
      (respuesta) => {
        const { data } = respuesta;
        this.listadoProcedimientos = data;

        console.log(this.listadoProcedimientos);

        this.OutListadoProcedimientos.emit(this.listadoProcedimientos);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  @Input() ingresoEsValido?: boolean = false;

  public isFormSubmited: boolean = true;
  public isFormSubmit: boolean = true;

  public validacionModal: boolean = false;
  @Output() OutValidacionModal: EventEmitter<boolean> = new EventEmitter();

  public guardarModal: boolean = false;
  @Output() OutSavedModal: EventEmitter<boolean> = new EventEmitter();

  close(event: boolean) {
    this.validacionModal = event;
    this.guardarModal = event;
  }

  public procForm = new FormGroup({
    procValor: new FormControl(),
    cobroValor: new FormControl(),
  });

  onSubmit() {
    if (this.procForm.controls.procValor.value) {
      console.log(this.procForm.controls.procValor.value);
      this.isFormSubmited = true;
    } else {
      this.isFormSubmited = false;
      this.validacionModal = true;
    }
    if (this.procForm.controls.cobroValor.value) {
      console.log(this.procForm.controls.cobroValor.value);
      this.isFormSubmit = true;
    } else {
      this.isFormSubmit = false;
      this.validacionModal = true;
    }
    if (
      this.procForm.controls.procValor.value &&
      this.procForm.controls.cobroValor.value
    ) {
      this.guardarModal = true;
    } else {
      this.guardarModal = false;
    }
    this.OutValidacionModal.emit(this.validacionModal);
    this.OutSavedModal.emit(this.guardarModal);
  }
  onLimpiar() {
    this.procForm.reset();
    return false;
  }
}
