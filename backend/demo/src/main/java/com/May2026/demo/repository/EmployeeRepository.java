package com.May2026.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.May2026.demo.entity.Employee;
@Repository
public interface EmployeeRepository  extends JpaRepository<Employee, Integer>{

}
