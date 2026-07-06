import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { employeeservice,Employee,Department, CreateEmployee } from '../services/employeeservice';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registercomponent.html',
  styleUrls: ['./registercomponent.css']
})
export class RegisterComponent {

employee: CreateEmployee= {

  emp_name: '',
  email: '',
  salary: 0,
  status: '',
  department: {
 
    dept_name: ''
  }
};
  constructor(private employeeService: employeeservice) {}

  Employee(): void {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (response) => {
        console.log('Employee added successfully:', response);
        alert('Employee registered successfully!');

        // Reset the form
   this.employee = {
  emp_name: '',
  email: '',
  salary: 0,
  status: '',
  department: {

    dept_name: ''
  }
};
      },
      error: (error) => {
        console.error('Error adding employee:', error);
        alert('Failed to register employee.');
      }
    });
  }
}
