package com.May2026.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.May2026.demo.entity.Department;
import com.May2026.demo.entity.Employee;
import com.May2026.demo.service.DepartmentService;
import com.May2026.demo.service.EmployeeService;

@RestController

@RequestMapping("/departments")
public class DepartmentController {
@Autowired
	DepartmentService service;
@PostMapping("/create")
public Department createDepartment(@RequestBody Department dept)
{
	return service.saveDepartment(dept);
}
@GetMapping("/all")
@PreAuthorize("hasRole('ADMIN')")
public List<Department> getAllDepartment()
{
	return service.getAllDepartment();
}

@GetMapping("/{id}")
public Department getDepartmentByid(@PathVariable Integer id)
{
	return service.getDepartmentById(id);
}

@PutMapping("/update/{id}")
public Department updateDepartment(@PathVariable Integer id, @RequestBody Department dept)
{
	return service.updateDepartment(id, dept);
	
}

@DeleteMapping("/delete/{id}")
public String deleteDepartment(@PathVariable Integer id)
{
	return service.deleteDepartment(id);
}
	
}
