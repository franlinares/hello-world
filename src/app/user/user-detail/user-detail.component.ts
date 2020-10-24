import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/models/user';
import { UserModelService } from 'src/app/user/services/user-model.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  private userId: any;

  user: User = new User();
  

  constructor(
    private userService: UserModelService, 
    private router: ActivatedRoute,
    private route: Router) { 
      router.params.subscribe(resp => {
        this.userId = resp?.id || null;
      });
    }

  ngOnInit(): void {
    if (this.userId) {
      this.userService.getUser(this.userId).subscribe(resp => {
        if (resp) {
          this.user = resp;
        }
      });
    }
  }
// Method to save the created user
  save(user: User): void {
    if (user) {
      this.userService.saveUser(user).subscribe(resp => {
        // this.user = resp;
        this.route.navigate(['/user']);
      });
    }
  }

}
