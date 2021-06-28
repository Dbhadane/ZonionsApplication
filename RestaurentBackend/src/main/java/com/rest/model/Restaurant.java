package com.rest.model;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.swing.text.View;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "Restaurant")
public class Restaurant {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false)
	private String restName;
	@Column(nullable = false)
	private String mobileNo;
	@Column(nullable = false)
	private String addr;

	@Column
	private String myTimePicker;
	@Column
	private String myTimePickerc;
	@Column
	private boolean isActive;

	@Column(name = "name")
	
	@JsonView(com.rest.model.View.FileInfo.class)
	private String name;
	
	@Column(name = "mimetype")
	private String mimetype;

	@Lob
	@Column(name = "pic")
	private byte[] pic;

	 @Column
	 private String lastModify;
	
	public String getLastModify() {
		return lastModify;
	}

	public void setLastModify(String lastModify) {
		this.lastModify = lastModify;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMimetype() {
		return mimetype;
	}

	public void setMimetype(String mimetype) {
		this.mimetype = mimetype;
	}

	public byte[] getPic() {
		return pic;
	}

	public void setPic(byte[] pic) {
		this.pic = pic;
	}

	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRestName() {
		return restName;
	}

	public void setRestName(String restName) {
		this.restName = restName;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public String getMyTimePicker() {
		return myTimePicker;
	}

	public void setMyTimePicker(String myTimePicker) {
		this.myTimePicker = myTimePicker;
	}

	public String getMyTimePickerc() {
		return myTimePickerc;
	}

	public void setMyTimePickerc(String myTimePickerc) {
		this.myTimePickerc = myTimePickerc;
	}



	@Override
	public String toString() {
		return "Restaurant [id=" + id + ", restName=" + restName + ", mobileNo=" + mobileNo + ", addr=" + addr
				+ ", myTimePicker=" + myTimePicker + ", myTimePickerc=" + myTimePickerc + ", isActive=" + isActive
				+ ", name=" + name + ", mimetype=" + mimetype + ", pic=" + Arrays.toString(pic) + "]";
	}



	public Restaurant(Long id, String restName, String mobileNo, String addr, String myTimePicker, String myTimePickerc,
			boolean isActive, String name, String mimetype, byte[] pic, String lastModify) {
		super();
		this.id = id;
		this.restName = restName;
		this.mobileNo = mobileNo;
		this.addr = addr;
		this.myTimePicker = myTimePicker;
		this.myTimePickerc = myTimePickerc;
		this.isActive = isActive;
		this.name = name;
		this.mimetype = mimetype;
		this.pic = pic;
		this.lastModify = lastModify;
	}

	public boolean isActive() {
		return isActive;
	}

	public void setActive(boolean isActive) {
		this.isActive = isActive;
	}
	public Restaurant() {
		// TODO Auto-generated constructor stub
	}

}