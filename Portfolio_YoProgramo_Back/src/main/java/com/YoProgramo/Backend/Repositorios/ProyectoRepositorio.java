package com.YoProgramo.Backend.Repositorios;

import java.util.List;

import com.YoProgramo.Backend.Entidades.Proyecto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProyectoRepositorio extends JpaRepository<Proyecto, String> {
    
    @Query ("SELECT c FROM Proyecto c where c.persona.id = :id")
    public List<Proyecto> buscarProyectosPorUsuario(@Param("id")String id);
    
}