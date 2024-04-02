import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal-ingreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Modal-Ingreso.component.html',
  styleUrl: './Modal-Ingreso.component.css',
})
export class ModalIngresoComponent {
  @ViewChild('ingresoModal', { static: false }) ingresoModal?: ElementRef;

  @Output() OutIngresoModal: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.OutIngresoModal.emit(false);
  }
  abrir() {
    this.OutIngresoModal.emit(true);
  }
}
