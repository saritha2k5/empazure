import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';


export interface Department {
  dept_id: number;
  dept_name: string;

}

@Injectable({
  providedIn: 'root',
})
export class Departmentservice {

  private http=inject(HttpClient);

  private getalldepartmenturl="http://localhost:9999/departments/all";

  getdepartments():Observable<Department[]>{

const headers=new HttpHeaders({
  Authorization: 'Basic ' + btoa('admin:admin123')
});
  return this.http.get<Department[]>(this.getalldepartmenturl, { headers });

}
  }



