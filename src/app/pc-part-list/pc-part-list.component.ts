import { Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IPCPart } from '../interfaces/ipcpart';

@Component({
  selector: 'pc-part-list',
  templateUrl: './pc-part-list.component.html',
  styleUrls: ['./pc-part-list.component.scss'],
})
export class PcPartListComponent implements OnInit {

  @Input() partList: Array<IPCPart>;
  @Input() partType: String;
  @Output() selectedItemChanged = new EventEmitter();
  selectedItem: IPCPart;

  constructor(private el: ElementRef) { }

  ngOnInit() { }

  handleItemSelected(pcPartInfo) {
    console.log('selected: ' +pcPartInfo);
    if (this.selectedItem) this.selectedItem.isSelected = false;
    this.selectedItem = pcPartInfo;
    this.selectedItem.isSelected = true;
    // this.selectedItemChanged.emit(pcPartInfo);
  }
  handleItemRemoved(pcPartInfo) {
    console.log('removed: ' +pcPartInfo);
    if (this.selectedItem) {
      this.selectedItem.isSelected = false;
    }
    // this.selectedItemChanged.emit(this.selectedItem);
  }

}
