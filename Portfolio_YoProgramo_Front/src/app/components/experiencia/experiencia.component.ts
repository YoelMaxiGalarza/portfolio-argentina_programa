import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup, FormControl } from '@angular/forms';
declare var window: any;

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  // TODO: remove hardcoded values and call API when component loads (ngOnInit)
  experiencias: Experiencia[] = [];

  crearModal: any; // TODO: can we use something like Ref Element o algo asi?
  editarModal: any; // TODO: can we use something like Ref Element o algo asi?
  eliminarModal: any;
  isLoggedIn: Boolean = false;

  nuevaExperienciaForm = new FormGroup({
    nombre: new FormControl(''),
    puesto: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
    fechaInicio: new FormControl(),
    fechaFin: new FormControl(),
  });

  editarExperienciaForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    puesto: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
    fechaInicio: new FormControl(),
    fechaFin: new FormControl(),
  });

  expIdAEliminar: number = 0;

  constructor(
    public experienciaService: ExperienciaService,
    private usuarioService: UsuarioService
  ) {}

  // TODO: complete this
  ngOnInit(): void {
    this.experienciaService.obtenerExperiencias().subscribe((data) => {
      this.experiencias = data;
    });
	this.isLoggedIn = this.usuarioService.isLoggedIn();
  }

  onCrearExperienciaModal() {
    this.editarModal = new window.bootstrap.Modal(
      document.getElementById('nuevaExperienciaModal')
    );
    this.editarModal.show();
  }

  onCrearExperiencia() {
    // send POST, close modal and update experiencies when request has finished
    console.log('calling api');
    this.experienciaService
      .crearExperiencia(this.nuevaExperienciaForm.value)
      .subscribe((data) => {
        if (data) {
          this.editarModal.hide();
          this.updateExperienciasList();
        }
      });
  }

  onEditarExperienciaModal(experienciaId: number) {
    var myModal = new window.bootstrap.Modal(
      document.getElementById('editarExperienciaModal')
    );
    var experiencia = this.experiencias.find((e) => e.id == experienciaId);

    if (experiencia) {
      this.editarExperienciaForm.patchValue(experiencia);
    }

    myModal.show();
  }

  onEditarExperiencia() {
    this.experienciaService
      .editarExperiencia(this.editarExperienciaForm.value)
      .subscribe((data) => {
        if (data) {
          this.editarModal.hide();
          this.updateExperienciasList();
        }
      });
  }

  onEliminarExperienciaModal(experienciaId: number) {
    this.eliminarModal = new window.bootstrap.Modal(
      document.getElementById('eliminarExperienciaModal')
    );
    var proyecto = this.experiencias.find((p) => p.id == experienciaId);

    if (proyecto) {
      this.expIdAEliminar = experienciaId;
    }

    this.eliminarModal.show();
  }

  onEliminarExperiencia() {
    this.experienciaService
      .eliminarExperiencia(this.expIdAEliminar)
      .subscribe((data) => {
        if (data) {
          this.eliminarModal.hide();
          this.updateExperienciasList();
        }
      });
  }

  updateExperienciasList() {
    this.experienciaService.obtenerExperiencias().subscribe((data) => {
      this.experiencias = data;
    });
  }
}
