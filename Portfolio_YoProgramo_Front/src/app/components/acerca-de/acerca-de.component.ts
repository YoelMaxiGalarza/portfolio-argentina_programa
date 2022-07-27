import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  // TODO: remove hardcoded values and call API when component loads (ngOnInit)
  persona: Persona = {
    id: 1,
    nombre: "Yoel",
    apellido: "Galarza",
    puesto: "Full Stack Developer",
    foto: "../../../assets/fotoPerfil.png",
    descripcion: "La descripción va aqui ..."
  }

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    // TODO: do something about this
    // this.personaService.obtenerPersona().subscribe(data => {this.persona = data});
  }

}
