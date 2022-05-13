package com.YoProgramo.Backend.Repositorios;

import com.YoProgramo.Backend.Entidades.Estudio;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EstudioRepositorio extends JpaRepository<Estudio, Integer> {
    
}
