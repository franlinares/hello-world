import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserModelService } from '../../services/user-model.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserModelService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {

    this.userService.getUsers().subscribe(resp => {
      if (resp) {
        this.users = resp;
      }
    });
  }
}
