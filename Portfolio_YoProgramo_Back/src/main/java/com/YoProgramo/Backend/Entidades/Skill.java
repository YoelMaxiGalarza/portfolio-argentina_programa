package com.YoProgramo.Backend.Entidades;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.GenericGenerator;

public class Skill {
    @Id
    @GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
    private String id;
    
    private Integer percent;
    private String image;

    @ManyToOne
    private Persona persona;


    public Skill() {
    }

    public Skill(Integer percent, String image) {
        this.percent = percent;
        this.image = image;
    }

    public Integer getPercent() {
        return this.percent;
    }

    public void setPercent(Integer percent) {
        this.percent = percent;
    }

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Persona getPersona() {
        return this.persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", percent='" + getPercent() + "'" +
            ", image='" + getImage() + "'" +
            ", persona='" + getPersona() + "'" +
            "}";
    }

}
