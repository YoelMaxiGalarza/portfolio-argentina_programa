package com.YoProgramo.Backend.Entidades;

import javax.persistence.*;

@Entity
public class Habilidad {
    
    @Id
    private Integer id;
    
    private Integer percent;
    private String image;

    @ManyToOne
    private Persona persona;


    public Habilidad() {
    }

    public Habilidad(Integer percent, String image) {
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

    public Integer getId() {
        return this.id;
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