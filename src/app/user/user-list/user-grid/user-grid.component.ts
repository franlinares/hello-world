import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/user/models/user';


@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {

  @Input() users: User[] = [];
  @Output() delete = new EventEmitter<number>(false);
  @Output() edit = new EventEmitter<number>(false);

  filterUser = '';

  constructor() { }

  ngOnInit(): void {
  }

  deleteClick(user: User): void {
    this.delete.emit(user.id);
  }

  editClick(user: User): void {
    this.edit.emit(user.id);
  }

}
