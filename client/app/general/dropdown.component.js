import { Component, Input } from '@angular/core';

@Component({
  inputs: ['options'],
  selector: 'dropdown',
  templateUrl: './dropdown.component.html'
})

export class DropdownComponent {
  onSelect(option) {
    this.selected = option
  }
}
