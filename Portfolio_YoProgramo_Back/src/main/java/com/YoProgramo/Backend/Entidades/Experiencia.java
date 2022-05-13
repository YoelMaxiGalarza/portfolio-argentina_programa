package com.YoProgramo.Backend.Entidades;

import javax.persistence.*;


@Entity
public class Experiencia {
    
    @Id
	private Integer id;
    
    private String title;
    private String description;
    private String foto;
    
    @ManyToOne
    private Persona persona;

    public Experiencia(){

    }

    public Experiencia(String title, String description, String foto){
        this.title = title;
        this.description = description;
        this.foto = foto;
    }

    

    /**
     * @return String return the title
     */
    public String getTitle() {
        return title;
    }

    /**
     * @param title the title to set
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return String return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
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
     * @return String return the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @return Persona return the persona
     */
    public Persona getPersona() {
        return persona;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", foto='" + getFoto() + "'" +
            ", persona='" + getPersona() + "'" +
            "}";
    }

}
