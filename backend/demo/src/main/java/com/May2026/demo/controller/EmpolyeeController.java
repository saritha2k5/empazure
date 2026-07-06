package com.May2026.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.May2026.demo.entity.Employee;
import com.May2026.demo.service.EmployeeService;

@RestController

@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:4200")
public class EmpolyeeController {
@Autowired
	EmployeeService service;
@PostMapping("/create")
public Employee createEmployee(@RequestBody Employee emp)
{
	return service.saveEmployee(emp);
}
@GetMapping("/all")
public List<Employee> getAllEmployees()
{
	return service.getAllEmployees();
}

@GetMapping("/{id}")
public Employee getEmployeeByid(@PathVariable Integer id)
{
	return service.getEmployeeById(id);
}

@PutMapping("/update/{id}")
public Employee updateEmployee(@PathVariable Integer id, @RequestBody Employee emp)
{
	return service.updateEmployee(id, emp);
	
}

@DeleteMapping("/delete/{id}")
public String deleteEmployee(@PathVariable Integer id)
{
	return service.deleteEmplyee(id);
}
	
}
