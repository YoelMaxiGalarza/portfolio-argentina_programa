package com.YoProgramo.Backend.Repositorios;

import com.YoProgramo.Backend.Entidades.Habilidad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HabilidadRepositorio extends JpaRepository<Habilidad, Integer> {
    
}
