package com.employee.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="employees")
public class Employee {
	@Id
	@GeneratedValue
	private int employeeId;
	private String employeeName;
	private long salary;
	private String department;
	private String city;
	private String bloodGroup;

}
