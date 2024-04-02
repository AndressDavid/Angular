import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal-proc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Modal-Proc.component.html',
  styleUrl: './Modal-Proc.component.css',
})
export class ModalProcComponent {
  @ViewChild('procedimientosModal', { static: false })
  procedimientosModal?: ElementRef;

  @Output() OutProcModal: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.OutProcModal.emit(false);
  }
  abrir() {
    this.OutProcModal.emit(true);
  }
}
