package com.YoProgramo.Backend.Entidades;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

public class Persona {
    @Id
    @GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;

    private String nombre;
    private String cargo;
    private String descripcion;
    private String foto;

    private List<Estudio> estudios;
    private List<Experiencia> experienciaLaboral;


    public Persona() {
    }
    

    public Persona(String id, String nombre, String cargo, String descripcion, String foto, List<Estudio> estudios, List<Experiencia> experienciaLaboral) {
        this.id = id;
        this.nombre = nombre;
        this.cargo = cargo;
        this.descripcion = descripcion;
        this.foto = foto;
        this.estudios = estudios;
        this.experienciaLaboral = experienciaLaboral;
    }
    
    public Persona(String nombre, String cargo, String descripcion, String foto, List<Estudio> estudios, List<Experiencia> experienciaLaboral) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.descripcion = descripcion;
        this.foto = foto;
        this.estudios = estudios;
        this.experienciaLaboral = experienciaLaboral;
    }

        

    /**
     * @return String return the id
     */
    public String getId() {
        return id;
    }


    /**
     * @return String return the nombre
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the nombre to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return String return the cargo
     */
    public String getCargo() {
        return cargo;
    }

    /**
     * @param cargo the cargo to set
     */
    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    /**
     * @return String return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param descripcion the descripcion to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * @return String return the foto
     */
    public String getFoto() {
        return foto;
    }

    /**
     * @param foto the foto to set
     */
    public void setFoto(String foto) {
        this.foto = foto;
    }

    /**
     * @return List<Estudio> return the estudios
     */
    public List<Estudio> getEstudios() {
        return estudios;
    }

    /**
     * @param estudios the estudios to set
     */
    public void setEstudios(List<Estudio> estudios) {
        this.estudios = estudios;
    }

    /**
     * @return List<Experiencia> return the experienciaLaboral
     */
    public List<Experiencia> getExperienciaLaboral() {
        return experienciaLaboral;
    }

    /**
     * @param experienciaLaboral the experienciaLaboral to set
     */
    public void setExperienciaLaboral(List<Experiencia> experienciaLaboral) {
        this.experienciaLaboral = experienciaLaboral;
    }

}
