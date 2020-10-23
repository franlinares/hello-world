import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent implements OnInit {

  @Output() searchUser = new EventEmitter<string>(false);

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

  searchClick(value: string): void {
    if (value) {
      this.searchUser.emit(value);
    }
  }

}
