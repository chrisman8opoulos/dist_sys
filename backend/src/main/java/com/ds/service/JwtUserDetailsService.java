package com.ds.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ds.dao.UserDao;
import com.ds.model.DAOUser;
import com.ds.model.UserDTO;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		DAOUser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}
	
	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		if(user.getRole().equals("user")){
			newUser.setActivate(false);
		}else{
			newUser.setActivate(true);
		}
		newUser.setRole(user.getRole());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setDepartment(user.getDepartment());
		newUser.setAddress(user.getAddress());
		newUser.setPhone(user.getPhone());
		return userDao.save(newUser);
	}

	public DAOUser update(UserDTO user) {
		DAOUser daoUser = userDao.findAllById(user.getId());
		daoUser.setUsername(user.getUsername());
		daoUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		if(user.getRole().equals("user")){
			daoUser.setActivate(false);
		}else if(!user.getRole().equals("user")){
			daoUser.setActivate(true);
		}
		daoUser.setRole(user.getRole());
		daoUser.setFirstName(user.getFirstName());
		daoUser.setLastName(user.getLastName());
		daoUser.setDepartment(user.getDepartment());
		daoUser.setAddress(user.getAddress());
		daoUser.setPhone(user.getPhone());
		return userDao.save(daoUser);
	}

	public void delete(UserDTO user) {
		DAOUser newUser = userDao.findAllById(user.getId());
		userDao.delete(newUser);
	}

	public List<DAOUser> getUsers() {
		List<DAOUser> newUser = userDao.findAll();
		return newUser;
	}

	public DAOUser getUser(long id) {
		DAOUser newUser = userDao.findAllById(id);
		return newUser;
	}

	public List<DAOUser> getOnlyUser() {
		List<DAOUser> newUser = userDao.findAllByRole("user");
		return newUser;
	}

	public DAOUser getActivate(DAOUser user) {
		DAOUser newUser = userDao.findAllById(user.getId());
		newUser.setActivate(true);
		return userDao.save(newUser);
	}

	public DAOUser getDactivate(DAOUser user) {
		DAOUser newUser = userDao.findAllById(user.getId());
		newUser.setActivate(false);
		return userDao.save(newUser);
	}
}