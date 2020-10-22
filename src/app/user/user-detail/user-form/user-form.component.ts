import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../models/user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() set user(value: User) {
    if (value) {
      this.userForm.patchValue(value);
    }
  }

  @Output() userChanged = new EventEmitter<User>(false);
  
  userForm: FormGroup;

  constructor(fb: FormBuilder) { 

    this.userForm = fb.group({
      id: [''],
      name: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  newUser(): void {
    this.userForm.reset();
  }

  saveForm(value: User): void {
    if (value) {
      this.userChanged.emit(new User(value));
    }
  }

}
