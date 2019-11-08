package com.AngularjsRestApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AngularjsRestApi.model.Employee;

public interface EmployeeRepository  extends JpaRepository<Employee, Integer>{

	Employee findByName(String name);
}
