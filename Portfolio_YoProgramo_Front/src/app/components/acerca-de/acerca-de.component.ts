import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Persona } from '../../models/persona';
declare var window: any;

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = {
    id: 0,
    nombre: '',
    apellido: '',
    puesto: '',
    imagen: '',
    descripcion: ''
  };
  editarAcercaDeForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    puesto: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
  });

  editarModal: any; // TODO: can we use something like Ref Element o algo asi?
  isLoggedIn: Boolean = false;

  constructor(
    public personaService: PersonaService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    // TODO: do something about this
    this.personaService.obtenerPersona().subscribe((data) => {
      this.persona = data;
    });
    this.isLoggedIn = this.usuarioService.isLoggedIn();
  }

  onEditarAcercaDeModal() {
    this.editarModal = new window.bootstrap.Modal(
      document.getElementById('editarAcercaDeModal')
    );
    this.editarAcercaDeForm.patchValue(this.persona);
    this.editarModal.show();
  }

  onEditarAcercaDe() {
    // send POST, close modal and update experiencies when request has finished
    console.log('calling api');
    this.personaService
      .editarPersona(this.editarAcercaDeForm.value)
      .subscribe((data) => {
        if (data) {
          this.editarModal.hide();
          this.updatePersona();
        }
      });
  }
  
  updatePersona() {
    this.personaService.obtenerPersona().subscribe((data) => {
      this.persona = data;
    });
  }
}
