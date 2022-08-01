import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Boolean = false;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.usuarioService.isLoggedIn();
    console.log(this.isLoggedIn);
  }

  onLogout() {
    this.usuarioService.logout();
    window.location.reload(); // TODO: user router
  }
}
