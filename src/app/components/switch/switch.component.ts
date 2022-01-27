import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
})
export class SwitchComponent implements OnInit {
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Input() checked: boolean = false;
  @Output() onChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  internalChange() {
    this.checked = !this.checked;
    this.onChange.emit(this.checked);
  }
}
