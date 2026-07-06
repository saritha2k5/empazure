import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  employeeservice,
  Employee
} from '../services/employeeservice';

@Component({
  selector: 'app-employeecomponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employeecomponent.html',
  styleUrls: ['./employeecomponent.css']
})
export class Employeecomponent implements OnInit {

  private empService = inject(employeeservice);

  employees: Employee[] = [];

  // Stores the employee currently being edited
  editingId: number | null = null;

  // Backup for cancel operation
  private originalEmployee: Employee | null = null;

  ngOnInit(): void {
    console.log("component initialized")
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.empService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => {
        console.error('Error loading employees', err);
      }
    });
  }

  editEmployee(emp: Employee): void {
    this.editingId = emp.emp_id;

    // Deep copy to restore on cancel
    this.originalEmployee = JSON.parse(JSON.stringify(emp));
  }
saveEmployee(emp: Employee): void {
  this.empService.updateEmployee(emp).subscribe({
    next: () => {
      alert('Employee updated successfully.');
      this.editingId = null;
      this.loadEmployees();
    },
    error: (err) => {
      console.error(err);
      alert('Failed to update employee.');
    }
  });
}

  cancelEdit(): void {
    if (this.originalEmployee && this.editingId !== null) {
      const index = this.employees.findIndex(
        e => e.emp_id === this.editingId
      );

      if (index !== -1) {
        this.employees[index] = JSON.parse(
          JSON.stringify(this.originalEmployee)
        );
      }
    }

    this.editingId = null;
    this.originalEmployee = null;
  }

  deleteEmployee(empId: number): void {
    if (!confirm('Are you sure you want to delete this employee?')) {
      return;
    }

    this.empService.deleteEmployee(empId).subscribe({
      next: () => {
        alert('Employee deleted successfully.');
        this.loadEmployees();
      },
      error: (err) => {
        console.error(err);
        alert('Failed to delete employee.');
      }
    });
  }
}