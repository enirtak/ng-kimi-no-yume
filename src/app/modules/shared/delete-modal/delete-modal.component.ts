import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() modalId!: string;
  @Input() selectedId!: number | undefined;
  @Input() selectedName!: string | undefined;
  @Output() onDeleteConfirm: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteConfirm(){
    this.onDeleteConfirm.emit();
  }

}
