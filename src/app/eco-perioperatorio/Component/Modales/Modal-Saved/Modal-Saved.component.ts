import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal-saved',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Modal-Saved.component.html',
  styleUrl: './Modal-Saved.component.css',
})
export class ModalSavedComponent {
  @ViewChild('savedModal', { static: false })
  savedModal?: ElementRef;

  @Output() OutSavedModal: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.OutSavedModal.emit(false);
  }
  abrir() {
    this.OutSavedModal.emit(true);
  }
}
