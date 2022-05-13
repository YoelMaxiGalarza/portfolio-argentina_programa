package com.YoProgramo.Backend.Entidades;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Entity
public class Usuario {
	
	@Id
	private Integer id;

	private String nombreDeUsuario;
	private String clave;
	private String mail;

	@OneToOne
	private Persona persona;
	
	public Usuario() {
	
	}

	public Usuario(Integer id, String nombreDeUsuario, String clave){
		this.id = id;
		this.nombreDeUsuario = nombreDeUsuario;
		this.clave = clave;
	}

	public Usuario(String nombreDeUsuario, String clave) {
		this.nombreDeUsuario = nombreDeUsuario;
		this.clave = clave;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombreDeUsuario() {
		return nombreDeUsuario;
	}

	public void setNombreDeUsuario(String nombreDeUsuario) {
		this.nombreDeUsuario = nombreDeUsuario;
	}

	public String getClave() {
		return clave;
	}

	public void setClave(String clave) {
		this.clave = clave;
	}

	

	@Override
	public String toString() {
		return "{" +
			" id='" + getId() + "'" +
			", nombreDeUsuario='" + getNombreDeUsuario() + "'" +
			", clave='" + getClave() + "'" +
			"}";
	}
	

    /**
     * @return String return the mail
     */
    public String getMail() {
        return mail;
    }

    /**
     * @param mail the mail to set
     */
    public void setMail(String mail) {
        this.mail = mail;
    }

    /**
     * @return Persona return the persona
     */
    public Persona getPersona() {
        return persona;
    }

    /**
     * @param persona the persona to set
     */
    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
