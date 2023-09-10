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
  email: string = '';
  password: string = '';
  name: string = '';
  phone: string = '';

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

    this.userService.add({ email: this.email, password: this.password, name: this.name, phone: this.phone, status: true, points: 0 }).subscribe(
      () => {
        console.log('Login bem-sucedido!');
        this.router.navigate(['/home']);
      },
      error => {
        console.log('Erro no login:', error);
        alert('Falha no login. Verifique suas credenciais.');
      }
    );
  }
}