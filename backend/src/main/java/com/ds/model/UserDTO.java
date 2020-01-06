package com.ds.model;

public class UserDTO {
	private long id;
	private String username;
	private String password;
	private String role;
	private String token;
	private boolean activate;
	private String firstName;
	private String lastName;
	private String department;
	private String address;
	private String phone;

	public UserDTO(long id, String username, String password, String role, String token, boolean activate, String firstName, String lastName, String department, String address, String phone) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.token = token;
		this.activate = activate;
		this.firstName = firstName;
		this.lastName = lastName;
		this.department = department;
		this.address = address;
		this.phone = phone;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public boolean isActivate() {
		return activate;
	}

	public void setActivate(boolean activate) {
		this.activate = activate;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}