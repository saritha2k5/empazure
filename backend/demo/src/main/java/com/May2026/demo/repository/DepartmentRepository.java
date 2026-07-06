package com.May2026.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.May2026.demo.entity.Department;
import com.May2026.demo.entity.Employee;
@Repository
public interface DepartmentRepository  extends JpaRepository<Department, Integer>{

}
