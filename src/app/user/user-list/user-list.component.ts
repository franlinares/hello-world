import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user/models/user';


import { UserModelService } from 'src/app/user/services/user-model.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  searching = false;

  constructor(private userService: UserModelService, private route: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }


 delete(id: number): void {
  if (id) { 
    this.userService.deleteUser(id).subscribe(resp => {

      this.loadUsers();

    // Custom message once user is deleted
      Swal.fire({
        title: 'User deleted!',
        icon: 'success'
      });
      // Swal.showLoading();
      // Swal.close();
    });
    
  }
}

editUser(id: number): void {
  if (id) {
    this.route.navigate(['/user/user-edit', id]);
  }
}

  private loadUsers(): void {
    this.searching = true;
    this.userService.getUsers().subscribe(resp => {
      if (resp) {
        this.users = resp;
      }
      this.searching = false;
    });
  }

  search(name: string): void {
    this.users = this.users.filter(resp => {
      resp.name.includes(name);
    });
    console.log(name);
    console.log(this.users);
  }

}
