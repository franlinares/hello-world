import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserFilter } from '../../../models/user-filter';


@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {

  @Output() searchUser = new EventEmitter<UserFilter>(false);

  filterForm: FormGroup

  constructor(fb: FormBuilder) {
    this.filterForm = fb.group({
      name: [''],
    });
   }

  ngOnInit(): void {
  }

  reset(): void {
    this.filterForm.reset();
    
  }

  searchClick(value: any): void {
    if (value) {
      this.searchUser.emit(new UserFilter(value));
    }
  }

}
