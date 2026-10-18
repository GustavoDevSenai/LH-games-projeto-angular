import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  usuario!: string;

  senha!: string;



  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }



  ngOnInit(): void {

  }



  fazerLogin() {


    const acesso = this._loginService.login(
      this.usuario,
      this.senha
    );



    if(acesso) {


      this._loginService.setMostraMenu(false);


      this._router.navigate([
        '/restrito/lista-produto'
      ]);


    } else {


      alert(
        "Usuário ou senha inválidos"
      );


    }


  }


}