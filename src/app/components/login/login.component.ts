import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  acess_token: string = '';
  token: any;
  
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    // Qualquer inicialização necessária pode ser feita aqui.
  }

  logar(): void {
    if (!this.email || !this.password) {
      alert('Por favor, insira um email e uma senha válidos.');
      return;
    }

    this.loginService.logar({ email: this.email, password: this.password }).subscribe(
      (token) => {
        this.token = token;
        window.localStorage.setItem('token', this.token["access_token"]);
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