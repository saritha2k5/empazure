package com.May2026.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.May2026.demo.entity.Department;
import com.May2026.demo.entity.Employee;
import com.May2026.demo.repository.DepartmentRepository;
import com.May2026.demo.repository.EmployeeRepository;

@Service
public class DepartmentService {

	@Autowired
	DepartmentRepository repo1;
	
	public Department saveDepartment(Department dept)
	{
		return repo1.save(dept);
	}
	
	public List<Department> getAllDepartment()
	{
		return repo1.findAll();
	}
	
	public Department getDepartmentById(Integer Id)
	{
		return repo1.findById(Id).orElse(null);
		
		
	}
	
	
	public Department updateDepartment(Integer Id, Department dept)
	{
		Department existing=repo1.findById(Id).orElse(null);
		
		if(existing!=null)
		{
			//existing.setEmp_id(emp.getEmp_id());
			existing.setDept_id(dept.getDept_id());
			existing.setDept_name(dept.getDept_name());
			
			return repo1.save(existing);
		}
		return null;
	}
	
	public String deleteDepartment(Integer id)
	{
		repo1.deleteById(id);
		return "Department Deleted Successfully";
	}
	
}
