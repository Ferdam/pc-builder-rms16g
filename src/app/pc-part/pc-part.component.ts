import { Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Component({
  selector: 'pc-part',
  templateUrl: './pc-part.component.html',
  styleUrls: ['./pc-part.component.scss'],
})
export class PcPartComponent implements OnInit {
  @Input() partInfo: IPCPart;
  @Input() partType: String;
  @Input() isSelected = false;
  @Input() hideButtons = false;
  @Output() onItemSelect = new EventEmitter();
  @Output() onItemRemove = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  selectItem() {
    this.isSelected = true;
    this.partInfo.isSelected = true;
    this.onItemSelect.emit(this.partInfo);
    this.el.nativeElement.dispatchEvent(
      new CustomEvent('pc-part-selected', {
        detail: { pcPartType: this.partType,  pcPartInfo: this.partInfo },
        bubbles: true
      })
    );
  }

  removeItem() {
    this.isSelected = false;
    this.partInfo.isSelected = false;
    this.onItemRemove.emit(this.partInfo);
    this.el.nativeElement.dispatchEvent(
      new CustomEvent('pc-part-removed', {
        detail: { pcPartType: this.partType,  pcPartInfo: this.partInfo },
        bubbles: true
      })
    );
  }
}
