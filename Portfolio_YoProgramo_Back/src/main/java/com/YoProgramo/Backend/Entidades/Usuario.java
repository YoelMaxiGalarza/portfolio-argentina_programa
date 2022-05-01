package com.YoProgramo.Backend.Entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Usuario {
	
	@Id
	@GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
	private String id;

	private String nombreDeUsuario;
	private String clave;

	@OneToOne
	private Persona persona;
	
	public Usuario() {
	
	}

	public Usuario(String id, String nombreDeUsuario, String clave){
		this.id = id;
		this.nombreDeUsuario = nombreDeUsuario;
		this.clave = clave;
	}

	public Usuario(String nombreDeUsuario, String clave) {
		this.nombreDeUsuario = nombreDeUsuario;
		this.clave = clave;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
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
	
}
