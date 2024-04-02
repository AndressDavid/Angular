import { Component } from '@angular/core';

@Component({
  selector: 'app-eco-perioperatorio',
  templateUrl: './eco-perioperatorio.component.html',
  styleUrl: './eco-perioperatorio.component.css',
})
export class ECOPerioperatorioComponent {
  public ingresoValido: boolean = false;

  public onGetIngresoValido(ingresoValido: boolean) {
    this.ingresoValido = ingresoValido;
  }

  public validacionModal: boolean = false;

  public onGetValidacionModal(validacionModal: boolean) {
    this.validacionModal = validacionModal;
  }

  public guardarModal: boolean = false;

  public onGetGuardarModal(guardarModal: boolean) {
    this.guardarModal = guardarModal;
  }
}
