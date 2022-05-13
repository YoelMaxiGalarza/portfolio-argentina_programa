package com.YoProgramo.Backend.Entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Estudio {
    @Id
	@GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;
    
    private String title;
    private String description;
    private String foto;
    
    @ManyToOne
    private Persona persona;

    public Estudio(){

    }

    public Estudio(String title, String description, String foto, Persona persona){
        this.title = title;
        this.description = description;
        this.foto = foto;
        this.persona = persona;
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
    public String getId() {
        return id;
    }

    /**
     * @return Persona return the persona
     */
    public Persona getPersona() {
        return persona;
    }


}
