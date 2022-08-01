import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { UsuarioService } from 'src/app/services/usuario.service';
declare var window: any;
@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css'],
})
export class HardSoftSkillsComponent implements OnInit {
  skills: Skill[] = [];
  crearModal: any; // TODO: can we use something like Ref Element o algo asi?
  editarModal: any; // TODO: can we use something like Ref Element o algo asi?
  eliminarModal: any;
  isLoggedIn: boolean = false;

  nuevaSkillForm = new FormGroup({
    nombre: new FormControl(''),
    imagen: new FormControl(''),
    porcentaje: new FormControl(''),
  });

  editarSkillForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    imagen: new FormControl(''),
    porcentaje: new FormControl(''),
  });

  skillIdAEliminar: number = 0;

  constructor(
    public skillService: SkillService,
    private usuarioService: UsuarioService
  ) {}

  // TODO: complete this
  ngOnInit(): void {
    this.skillService.obtenerSkills().subscribe((data) => {
      this.skills = data;
    });
    this.isLoggedIn = this.usuarioService.isLoggedIn();
  }

  onCrearSkillModal() {
    this.crearModal = new window.bootstrap.Modal(
      document.getElementById('nuevaSkillModal')
    );
    this.crearModal.show();
  }

  onCrearSkill() {
    this.skillService
      .crearSkill(this.nuevaSkillForm.value)
      .subscribe((data) => {
        this.crearModal.hide();
        this.updateSkillsList();
      });
  }

  onEditarSkillModal(skillId: number) {
    this.editarModal = new window.bootstrap.Modal(
      document.getElementById('editarSkillModal')
    );
    var skill = this.skills.find((e) => e.id == skillId);

    if (skill) {
      this.editarSkillForm.patchValue(skill);
    }

    this.editarModal.show();
  }

  onEditarSkill() {
    this.skillService
      .editarSkill(this.editarSkillForm.value)
      .subscribe((data) => {
        if (data) {
          this.editarModal.hide();
          this.updateSkillsList();
        }
      });
  }

  onEliminarSkillModal(skillId: number) {
    this.eliminarModal = new window.bootstrap.Modal(
      document.getElementById('eliminarSkillModal')
    );
    var proyecto = this.skills.find((p) => p.id == skillId);

    if (proyecto) {
      this.skillIdAEliminar = skillId;
    }

    this.eliminarModal.show();
  }

  onEliminarSkill() {
    this.skillService.eliminarSkill(this.skillIdAEliminar).subscribe((data) => {
      if (data) {
        this.eliminarModal.hide();
        this.updateSkillsList();
      }
    });
  }

  updateSkillsList() {
    this.skillService.obtenerSkills().subscribe((data) => {
      this.skills = data;
    });
  }
}
