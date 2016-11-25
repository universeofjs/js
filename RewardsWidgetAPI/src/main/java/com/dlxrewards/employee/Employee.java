package com.dlxrewards.employee;

import org.springframework.data.annotation.Id;

public class Employee {

	@Id
	private String tnumber;
	private String firstName;
	private String lastName;
	private String title;
	private String dob;
	private String anniversaryDate;
	private String location;
	private String icon;

	public Employee() {

	}

	public Employee(String tnumber, String firstName, String lastName,
			String title, String dob, String anniversaryDate, String location,
			String icon) {
		this.tnumber = tnumber;
		this.firstName = firstName;
		this.lastName = lastName;
		this.title = title;
		this.dob = dob;
		this.anniversaryDate = anniversaryDate;
		this.location = location;
		this.icon = icon;

	}

	public String getTnumber() {
		return tnumber;
	}

	public void setTnumber(String tnumber) {
		this.tnumber = tnumber;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getAnniversaryDate() {
		return anniversaryDate;
	}

	public void setAnniversaryDate(String anniversaryDate) {
		this.anniversaryDate = anniversaryDate;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

}
