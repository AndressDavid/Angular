import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal-limpiar',
  standalone: true,
  templateUrl: './modal-limpiar.component.html',
  styleUrl: './modal-limpiar.component.css',
})
export class ModalLimpiarComponent {
  @ViewChild('cleanModal', { static: false }) cleanModal?: ElementRef;

  @Output() OutCleanModal: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.OutCleanModal.emit(false);
  }
  abrir() {
    this.OutCleanModal.emit(true);
  }
}
