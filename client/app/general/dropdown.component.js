import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  inputs: ['options'],
  outputs: ['selectedOptionChanged'],
  selector: 'dropdown',
  templateUrl: './dropdown.component.html'
})

export class DropdownComponent {
  selectedOptionChanged = new EventEmitter()
  onSelect(option) {
    this.selectedOptionChanged.emit({ value: option })
  }
}
