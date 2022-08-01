import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  URL = 'http://localhost:8080/proyecto'; // TODO: fix URL

  constructor(private http: HttpClient) {}

  // TODO: complete
  public obtenerProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL + '/lista'); // TODO: fix URL
  }

  public crearProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.URL + '/crear', proyecto);
  }

  public editarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(this.URL + '/update', proyecto);
  }

  public eliminarProyecto(proyectoId: number): Observable<any> {
    return this.http.delete<any>(this.URL + '/delete/' + proyectoId);
  }
}
