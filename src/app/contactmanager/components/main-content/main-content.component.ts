import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];

      if (!id) {
        id = 1;
      }

      this.user = null;

      this.service.users.pipe(delay(500)).subscribe((users) => {
        if (!users.length) {
          return;
        }
        this.user = this.service.userById(id);
      });
    });
  }
}
