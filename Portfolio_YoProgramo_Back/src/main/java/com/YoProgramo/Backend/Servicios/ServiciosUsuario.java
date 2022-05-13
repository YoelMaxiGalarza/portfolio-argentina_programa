package com.YoProgramo.Backend.Servicios;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import com.YoProgramo.Backend.Entidades.Usuario;
import com.YoProgramo.Backend.Repositorios.UsuarioRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service
public class ServiciosUsuario {

    @Autowired
    UsuarioRepositorio usuarioRepositorio;
    
    public UserDetails loadUserByUsername(String nombreUsuario) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepositorio.buscarUsuarioPorNombreDeUsuario("nombreUsuario");
            if (usuario != null) {
            List<GrantedAuthority> permisos = new ArrayList<GrantedAuthority>();

            GrantedAuthority p1 = new SimpleGrantedAuthority("ROLE_USUARIO_REGISTRADO");
            permisos.add(p1);

            ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
            HttpSession session = attr.getRequest().getSession(true);
            session.setAttribute("usuariosession", usuario);

            User user = new User(usuario.getNombreDeUsuario(), usuario.getClave(), permisos);

            return user;
        } else {
            return null;
        }

    }
}
