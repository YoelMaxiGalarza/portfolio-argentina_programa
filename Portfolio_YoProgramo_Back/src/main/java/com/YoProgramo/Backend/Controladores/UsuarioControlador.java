package com.YoProgramo.Backend.Controladores;

import java.util.List;

import com.YoProgramo.Backend.Entidades.Usuario;
import com.YoProgramo.Backend.Repositorios.UsuarioRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UsuarioControlador extends ControladorBase {
    
    @Autowired
    UsuarioRepositorio usuarioRepositorio;

    public List<Usuario> obtenerUsuario;

}
