import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLogin() {
    const val = this.loginForm.value;

    if (!val.username || !val.password) {
      return;
    }

    this.usuarioService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (data) => {
          if (data) {
            console.log('Logueado');
            console.log(data);
            this.router.navigateByUrl('/');
          } else {
            // TODO: avisarle al usuario de alguna forma
            console.log('Usuario inexistente o contraseña incorrecta.');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
