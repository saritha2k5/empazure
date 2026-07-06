import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Department {
  dept_name: string;
}

export interface CreateEmployee {
  emp_name: string;
  email: string | null;
  salary: number;
  status: string | null;
  department: Department;
}

export interface Employee extends CreateEmployee {
  emp_id: number;
}
@Injectable({
  providedIn: 'root',
})
export class employeeservice {

  private http = inject(HttpClient);
  private baseUrl='http://localhost:9999';
  private getAllEmployeeUrl = 'http://localhost:9999/employee/all';
  private addEmployeeUrl = 'http://localhost:9999/employee/create';

  // GET all employees
  getEmployees(): Observable<Employee[]> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('emp:emp123')
    });

    return this.http.get<Employee[]>(this.getAllEmployeeUrl, { headers });
  }

  // POST new employee
  createEmployee(employee: CreateEmployee): Observable<Employee> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('emp:emp123')
    });

    return this.http.post<Employee>(
      this.addEmployeeUrl,
      employee,
      { headers }
    );
  }

deleteEmployee(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/employee/delete/${id}`);
}

updateEmployee(employee: Employee): Observable<Employee> {
  const { emp_id, ...payload } = employee;

  return this.http.put<Employee>(
    `${this.baseUrl}/employee/update/${emp_id}`,
    payload
  );
}
}


