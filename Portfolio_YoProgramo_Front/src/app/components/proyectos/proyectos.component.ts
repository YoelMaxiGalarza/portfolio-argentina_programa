import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var window: any;
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  crearModal: any; // TODO: can we use something like Ref Element o algo asi?
  editarModal: any; // TODO: can we use something like Ref Element o algo asi?
  eliminarModal: any;
  isLoggedIn: Boolean = false;

  nuevoProyectoForm = new FormGroup({
    titulo: new FormControl(''),
    url: new FormControl(''),
    imagen: new FormControl(''),
    descripcion: new FormControl(''),
  });

  editarProyectoForm = new FormGroup({
    id: new FormControl(''),
    titulo: new FormControl(''),
    url: new FormControl(''),
    imagen: new FormControl(''),
    descripcion: new FormControl(''),
  });

  proyectoIdAEliminar: number = 0;

  constructor(public proyectoService: ProyectoService, private usuarioService: UsuarioService) {}

  // TODO: complete this
  ngOnInit(): void {
    this.updateProyectosList();
    this.isLoggedIn = this.usuarioService.isLoggedIn();
  }

  onCrearProyectoModal() {
    this.crearModal = new window.bootstrap.Modal(
      document.getElementById('nuevoProyectoModal')
    );

    this.crearModal.show();
  }

  onCrearProyecto() {
    // send POST, close modal and update experiencies when request has finished
    this.proyectoService
      .crearProyecto(this.nuevoProyectoForm.value)
      .subscribe((data) => {
        if (data) {
          this.crearModal.hide();
          this.updateProyectosList();
        }
      });
  }

  onEditarProyectoModal(proyectoId: number) {
    this.editarModal = new window.bootstrap.Modal(
      document.getElementById('editarProyectoModal')
    );
    var proyecto = this.proyectos.find((e) => e.id == proyectoId);

    if (proyecto) {
      this.editarProyectoForm.patchValue(proyecto);
    }

    this.editarModal.show();
  }

  onEliminarProyectoModal(proyectoId: number) {
    this.eliminarModal = new window.bootstrap.Modal(
      document.getElementById('eliminarProyectoModal')
    );
    var proyecto = this.proyectos.find((p) => p.id == proyectoId);

    if (proyecto) {
      this.proyectoIdAEliminar = proyectoId;
    }

    this.eliminarModal.show();
  }

  onEditarProyecto() {
    this.proyectoService
      .editarProyecto(this.editarProyectoForm.value)
      .subscribe((data) => {
        if (data) {
          this.editarModal.hide();
          this.updateProyectosList();
        }
      });
  }

  onEliminarProyecto() {
    this.proyectoService
      .eliminarProyecto(this.proyectoIdAEliminar)
      .subscribe((data) => {
        if (data) {
          this.eliminarModal.hide();
          this.updateProyectosList();
        }
      });
  }

  updateProyectosList() {
    this.proyectoService.obtenerProyectos().subscribe((data) => {
      this.proyectos = data;
    });
  }
}
