package com.portfolio.Yoel.Repository;

import com.portfolio.Yoel.Entity.Persona;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {
    
}
