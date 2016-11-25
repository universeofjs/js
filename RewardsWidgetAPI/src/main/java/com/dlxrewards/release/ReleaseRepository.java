package com.dlxrewards.release;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "releases", path = "releases")
public interface ReleaseRepository extends MongoRepository<Release, String> {

}
