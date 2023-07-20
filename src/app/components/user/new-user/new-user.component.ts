import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})

export class NewUserComponent implements OnInit {

  user: User = {} as User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.userService.add(this.user).subscribe( userResponse => {
      this.user = userResponse;
      alert("Usuário cadastrado com sucesso!");
      this.router.navigate(['/home']);
    },
      error => console.log(error)
    );
  }
}