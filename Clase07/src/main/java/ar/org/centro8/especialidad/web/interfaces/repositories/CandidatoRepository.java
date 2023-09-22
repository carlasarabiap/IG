package ar.org.centro8.especialidad.web.interfaces.repositories;

import org.springframework.stereotype.Repository;
import ar.org.centro8.especialidad.web.interfaces.entities.Candidato;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface CandidatoRepository extends CrudRepository<Candidato, Integer> {
    
}
