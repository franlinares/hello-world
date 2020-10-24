import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/user/models/user';

import { Location } from '@angular/common';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() set user(value: User) {
    if (value) {
      this.userForm.patchValue(value);
      this.userForm.controls.birthdate.patchValue(formatDate(this.userForm.controls.birthdate.value, 'yyyy-MM-dd', 'es'));
    }
  }

  @Output() userChanged = new EventEmitter<User>(false);
  
  userForm: FormGroup;

  constructor(fb: FormBuilder) { 

    this.userForm = fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthdate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userForm.reset();
  }
// Method to restart the form
  newUser(): void {
    this.userForm.reset();
  }

  // Method to save the new user and emit an event with the new user
  saveForm(value: User): void {
    if (value) {
      this.userChanged.emit(new User(value));
    }
  }

  // getters to validate form
  get nameInvalid() {
    return this.userForm.get('name').invalid && this.userForm.get('name').touched
  }

  get dateInvalid() {
    return this.userForm.get('birthdate').invalid && this.userForm.get('birthdate').touched
  }
}
