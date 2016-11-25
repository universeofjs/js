package com.dlxrewards.team;

public class Member {

	private String name;
	private String role;
	private int extension;

	public Member() {

	}

	public Member(String name, String role, int extension) {
		this.name = name;
		this.role = role;
		this.extension = extension;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getExtension() {
		return extension;
	}

	public void setExtension(int extension) {
		this.extension = extension;
	}

}
