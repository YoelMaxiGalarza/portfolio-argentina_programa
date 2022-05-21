package com.portfolio.Yoel.Interface;

import java.util.List;

import com.portfolio.Yoel.Entity.Persona;

public interface PersonaService {
    
    //Traer lista de personas
    public List<Persona> getPersona();

    //Buscar persona por ID
    public Persona findPersonaById(Long id);

    //Guardar Persona
    public void savePersona(Persona persona);

    //Borrar persona por ID
    public void deletePersona(Long id);

}
