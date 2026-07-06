package com.May2026.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.May2026.demo.entity.Employee;
import com.May2026.demo.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository repo;
	
	public Employee saveEmployee(Employee emp)
	{
		return repo.save(emp);
	}
	
	public List<Employee> getAllEmployees()
	{
		return repo.findAll();
	}
	
	public Employee getEmployeeById(Integer Id)
	{
		return repo.findById(Id).orElse(null);
		
		
	}
	
	
	public Employee updateEmployee(Integer Id, Employee emp)
	{
		Employee existing=repo.findById(Id).orElse(null);
		
		if(existing!=null)
		{
			//existing.setEmp_id(emp.getEmp_id());
			existing.setEmp_name(emp.getEmp_name());
			existing.setEmail(emp.getEmail());
			existing.setDepartment(emp.getDepartment());
			existing.setSalary(emp.getSalary());
			existing.setStatus(emp.getStatus());
			
			return repo.save(existing);
		}
		return null;
	}
	
	public String deleteEmplyee(Integer id)
	{
		repo.deleteById(id);
		return "Employee Deleted Successfully";
	}
	
}
