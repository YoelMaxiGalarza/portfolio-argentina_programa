package com.YoProgramo.Backend.Entidades;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Persona{
    
    @Id
    private Integer id;

    private String nombre;
    private String cargo;
    private String descripcion;
    private String foto;

    @OneToOne
    private Usuario usuario;

    
    @OneToMany
    private List<Estudio> estudios;
    
    @OneToMany
    private List<Experiencia> experienciaLaboral;
    
    @OneToMany
    private List<Habilidad> habilidades; 
    
    @OneToMany
    private List<Proyecto> proyectos; 


    public Persona() {
    }

    public Persona(String nombre, String cargo, String descripcion, String foto, List<Estudio> estudios, List<Experiencia> experienciaLaboral,List<Habilidad> habilidades, List<Proyecto> proyectos) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.descripcion = descripcion;
        this.foto = foto;
        this.estudios = estudios;
        this.experienciaLaboral = experienciaLaboral;
        this.habilidades= habilidades;
        this.proyectos = proyectos;
    }


    public Integer getId() {
        return this.id;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCargo() {
        return this.cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFoto() {
        return this.foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public Usuario getUsuario() {
        return this.usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public List<Estudio> getEstudios() {
        return this.estudios;
    }

    public void setEstudios(List<Estudio> estudios) {
        this.estudios = estudios;
    }

    public List<Experiencia> getExperienciaLaboral() {
        return this.experienciaLaboral;
    }

    public void setExperienciaLaboral(List<Experiencia> experienciaLaboral) {
        this.experienciaLaboral = experienciaLaboral;
    }

    public List<Habilidad> getHabilidades() {
        return this.habilidades;
    }

    public void setHabilidades(List<Habilidad> habilidades) {
        this.habilidades = habilidades;
    }

    public List<Proyecto> getProyectos() {
        return this.proyectos;
    }

    public void setProyectos(List<Proyecto> proyectos) {
        this.proyectos = proyectos;
    }
  

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", nombre='" + getNombre() + "'" +
            ", cargo='" + getCargo() + "'" +
            ", descripcion='" + getDescripcion() + "'" +
            ", foto='" + getFoto() + "'" +
            ", estudios='" + getEstudios() + "'" +
            ", experienciaLaboral='" + getExperienciaLaboral() + "'" +
            ", habilidades='" + getHabilidades() + "'" +
            "}";
    }

}
