import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      id: [
        0
      ],
      from: [
        'Wien',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      to: [
        'Berlin',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      date: [
        (new Date()).toISOString()
      ]
    });

    this.editForm.valueChanges
      .subscribe(console.log);
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }

  update(): void {
    this.editForm.patchValue({ from: 'Madrid '});
  }

}
