package com.YoProgramo.Backend.Repositorios;

import com.YoProgramo.Backend.Entidades.Persona;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonaRepositorio extends JpaRepository<Persona, String> {
    
}
