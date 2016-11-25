package com.dlxrewards.team;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "scrumteams")
public interface ScrumTeamRepository extends MongoRepository<ScrumTeam, String> {

}
