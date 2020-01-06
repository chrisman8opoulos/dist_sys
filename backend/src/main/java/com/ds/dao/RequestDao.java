package com.ds.dao;

import com.ds.model.DAORequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestDao extends CrudRepository<DAORequest, Integer> {

            DAORequest findByFirstNameAndLastName(String firstName, String lastName);

            DAORequest findById(long id);

            List<DAORequest> findByDepartment(String department);

            List<DAORequest> findAll();
}