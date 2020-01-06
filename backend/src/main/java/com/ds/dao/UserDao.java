package com.ds.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ds.model.DAOUser;

import java.util.List;

@Repository
public interface UserDao extends CrudRepository<DAOUser, Integer> {
	
	DAOUser findByUsername(String username);

	List<DAOUser> findAll();

	DAOUser findAllById(long id);

	DAOUser findAllById(int id);

	List<DAOUser> findAllByRole(String role);
}