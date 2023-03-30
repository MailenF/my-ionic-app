import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sub-rutines-form',
  templateUrl: './sub-rutines-form.component.html',
  styleUrls: ['./sub-rutines-form.component.scss'],
})
export class SubRutinesFormComponent implements OnInit {
  @Input('form') set setForm(form: FormGroup) {
    this.form = form;
  }
  @Output() deleteSubArray = new EventEmitter<any>();
  form: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit() {}
}
