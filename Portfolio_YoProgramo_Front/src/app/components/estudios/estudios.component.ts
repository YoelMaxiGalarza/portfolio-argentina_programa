import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/services/estudio.service';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var window: any;
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {
  // TODO: remove hardcoded values and call API when component loads (ngOnInit)
  estudios: Estudio[] = [];
  crearModal: any; // TODO: can we use something like Ref Element o algo asi?
  editarModal: any; // TODO: can we use something like Ref Element o algo asi?
  eliminarModal: any;
  isLoggedIn: Boolean = false;

  nuevoEstudioForm = new FormGroup({
    titulo: new FormControl(''),
    institucion: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
    fechaInicio: new FormControl(),
    fechaFin: new FormControl(),
  });

  editarEstudioForm = new FormGroup({
    id: new FormControl(''),
    titulo: new FormControl(''),
    institucion: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
    fechaInicio: new FormControl(),
    fechaFin: new FormControl(),
  });
  estudioIdAEliminar: number = 0;
  constructor(
    public estudioService: EstudioService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.estudioService.obtenerEstudios().subscribe((data) => {
      this.estudios = data;
    });
	this.isLoggedIn = this.usuarioService.isLoggedIn();
  }

  onCrearEstudioModal() {
    this.crearModal = new window.bootstrap.Modal(
      document.getElementById('nuevoEstudioModal')
    );
    this.crearModal.show();
  }

  onCrearEstudio() {
    // send POST, close modal and update experiencies when request has finished
    console.log('calling api');
    this.estudioService
      .crearEstudio(this.nuevoEstudioForm.value)
      .subscribe((data) => {
        if (data) {
          this.crearModal.hide();
          this.updateEstudiosList();
        }
      });
  }

  onEditarEstudioModal(estudioId: number) {
    this.editarModal = new window.bootstrap.Modal(
      document.getElementById('editarEstudioModal')
    );
    var estudio = this.estudios.find((e) => e.id == estudioId);

    if (estudio) {
      this.editarEstudioForm.patchValue(estudio);
    }

    this.editarModal.show();
  }

  onEditarEstudio() {
    this.estudioService
      .editarEstudio(this.editarEstudioForm.value)
      .subscribe((data) => {
        if (data) {
          this.editarModal.hide();
          this.updateEstudiosList();
        }
      });
  }

  onEliminarEstudioModal(estudioId: number) {
    this.eliminarModal = new window.bootstrap.Modal(
      document.getElementById('eliminarEstudioModal')
    );
    var proyecto = this.estudios.find((p) => p.id == estudioId);

    if (proyecto) {
      this.estudioIdAEliminar = estudioId;
    }

    this.eliminarModal.show();
  }

  onEliminarEstudio() {
    this.estudioService
      .eliminarEstudio(this.estudioIdAEliminar)
      .subscribe((data) => {
        if (data) {
          this.eliminarModal.hide();
          this.updateEstudiosList();
        }
      });
  }

  updateEstudiosList() {
    this.estudioService.obtenerEstudios().subscribe((data) => {
      this.estudios = data;
    });
  }
}
