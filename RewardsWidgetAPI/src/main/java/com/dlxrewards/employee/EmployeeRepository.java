package com.dlxrewards.employee;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "employees", path = "employees")
public interface EmployeeRepository extends MongoRepository<Employee, String> {

	public Employee findByFirstName(String firstName);

	public List<Employee> findByLastName(String lastName);

}
