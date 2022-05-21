package com.portfolio.Yoel.Service;

import java.util.List;
import java.util.Optional;

import com.portfolio.Yoel.Entity.Persona;
import com.portfolio.Yoel.Interface.InterfacePersonaService;
import com.portfolio.Yoel.Repository.PersonaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImplementacionPersonaService implements InterfacePersonaService {

    @Autowired
    PersonaRepository personaRepository;

    @Override
    public List<Persona> getPersona() {
        List<Persona> listaPersonas = personaRepository.findAll();
        return listaPersonas;
    }

    @Override
    public Persona findPersonaById(Long id) {

        Persona persona = personaRepository.findById(id).orElse(null);
        return persona;
    }

    @Override
    public void savePersona(Persona persona) {
        personaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        personaRepository.deleteById(id);
        
    }
    
}
