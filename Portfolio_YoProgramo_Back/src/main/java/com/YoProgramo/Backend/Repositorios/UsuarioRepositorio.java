package com.YoProgramo.Backend.Repositorios;

import com.YoProgramo.Backend.Entidades.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, String> {
    
    @Query ("SELECT c FROM Usuario c where c.id = :id")
    public Usuario buscarUsuarioPorMail(@Param("id")String id);
    
    @Query ("SELECT c FROM Usuario c where c.nombreDeUsuario = :nombreDeUsuario")
    public Usuario buscarUsuarioPorNombreDeUsuario (@Param("nombreDeUsuario")String nombreDeUsuario);
}
