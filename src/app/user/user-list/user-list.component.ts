import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';


import { UserModelService } from '../../services/user-model.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserModelService, private route: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

 // Method to delete user
 delete(id: number): void {
  if (id) {
    this.userService.deleteUser(id).subscribe(resp => {
      alert('The user has been removed');
      this.loadUsers();
    });
  }
}

// Method to edit a user 
editUser(id: number): void {
  if (id) {
    this.route.navigate(['/user/user-edit', id]);
  }
}

// Method to load all users
  private loadUsers(): void {
    this.userService.getUsers().subscribe(resp => {
      if (resp) {
        this.users = resp;
      }
    });
  }

// Method to search users
  search(name: string): void {
    this.users = this.users.filter(resp => {
      resp.name.includes(name);
    });
    console.log(name);
    console.log(this.users);
  }

}
