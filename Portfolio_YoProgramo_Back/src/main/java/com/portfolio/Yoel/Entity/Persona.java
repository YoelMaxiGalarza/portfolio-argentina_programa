package com.portfolio.Yoel.Entity;

import javax.persistence.*;
import javax.validation.constraints.*;
import lombok.*;

@Getter @Setter
@Entity
public class Persona {
    
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "nombre")
    @NotNull
    @Size(min =1, max= 50, message = "El nombre no tiene que ser nulo")
    private String nombre;

    @NotNull
    @Size(min =1, max= 50, message = "El apellido no tiene que ser nulo")
    @Column(name="apellido")
    private String apellido;

    @NotNull
    private String foto;

    @NotNull
    private String descripcion;

}
