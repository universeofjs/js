package com.dlxrewards.release;

import org.springframework.data.annotation.Id;

public class Release {

	@Id
	private String id;
	private String releaseNumber;
	private String codeLockDownDate;
	private String rcDeploymentDate;
	private String xuatDeploymentDate;
	private String prodDeploymentDate;
	private String releaseNotes;

	public Release() {

	}

	public Release(String id, String releaseNumber, String codeLockDownDate,
			String rcDeploymentDate, String xuatDeploymentDate,
			String prodDeploymentDate, String releaseNotes) {
		this.id = id;
		this.releaseNumber = releaseNumber;
		this.codeLockDownDate = codeLockDownDate;
		this.rcDeploymentDate = rcDeploymentDate;
		this.xuatDeploymentDate = xuatDeploymentDate;
		this.prodDeploymentDate = prodDeploymentDate;
		this.releaseNotes = releaseNotes;

	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getReleaseNumber() {
		return releaseNumber;
	}

	public void setReleaseNumber(String releaseNumber) {
		this.releaseNumber = releaseNumber;
	}

	public String getCodeLockDownDate() {
		return codeLockDownDate;
	}

	public void setCodeLockDownDate(String codeLockDownDate) {
		this.codeLockDownDate = codeLockDownDate;
	}

	public String getRcDeploymentDate() {
		return rcDeploymentDate;
	}

	public void setRcDeploymentDate(String rcDeploymentDate) {
		this.rcDeploymentDate = rcDeploymentDate;
	}

	public String getXuatDeploymentDate() {
		return xuatDeploymentDate;
	}

	public void setXuatDeploymentDate(String xuatDeploymentDate) {
		this.xuatDeploymentDate = xuatDeploymentDate;
	}

	public String getProdDeploymentDate() {
		return prodDeploymentDate;
	}

	public void setProdDeploymentDate(String prodDeploymentDate) {
		this.prodDeploymentDate = prodDeploymentDate;
	}

	public String getReleaseNotes() {
		return releaseNotes;
	}

	public void setReleaseNotes(String releaseNotes) {
		this.releaseNotes = releaseNotes;
	}

}
