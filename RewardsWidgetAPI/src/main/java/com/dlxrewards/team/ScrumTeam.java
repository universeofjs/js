package com.dlxrewards.team;

import java.util.List;

import org.springframework.data.annotation.Id;

public class ScrumTeam {

	@Id
	private String id;
	private String name;
	private List<Member> members;
	private String standupTime;
	private String scrumMaster;
	private String businessAnalyst;
	
	public ScrumTeam() {

	}

	public ScrumTeam(String id, String name, List<Member> members,
			String standupTime, String scrumMaster, String businessAnalyst) {
		this.id = id;
		this.name = name;
		this.members = members;
		this.standupTime = standupTime;
		this.scrumMaster = scrumMaster;
		this.businessAnalyst = businessAnalyst;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Member> getMembers() {
		return members;
	}

	public void setMembers(List<Member> members) {
		this.members = members;
	}

	public String getStandupTime() {
		return standupTime;
	}

	public void setStandupTime(String standupTime) {
		this.standupTime = standupTime;
	}

	public String getScrumMaster() {
		return scrumMaster;
	}

	public void setScrumMaster(String scrumMaster) {
		this.scrumMaster = scrumMaster;
	}

	public String getBusinessAnalyst() {
		return businessAnalyst;
	}

	public void setBusinessAnalyst(String businessAnalyst) {
		this.businessAnalyst = businessAnalyst;
	}

}
