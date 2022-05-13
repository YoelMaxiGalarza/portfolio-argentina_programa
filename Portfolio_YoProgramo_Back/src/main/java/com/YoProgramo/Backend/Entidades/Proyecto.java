package com.YoProgramo.Backend.Entidades;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Proyecto {
    @Id
    @GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    
    private String title;
    private String description;
    private String link;
    
    @ManyToOne
    private Persona persona;

    public Proyecto() {
    }

    public Proyecto(String title, String description, String link) {
        this.title = title;
        this.description = description;
        this.link = link;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLink() {
        return this.link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getId() {
        return this.id;
    }
    public Persona getPersona(){
        return this.persona;
    }
    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", link='" + getLink() + "'" +
            ", persona='" + getPersona() + "'" +
            "}";
    }

}
