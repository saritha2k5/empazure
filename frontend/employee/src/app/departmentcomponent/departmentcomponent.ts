import { Component, inject, OnInit } from '@angular/core';
import { Department,Departmentservice } from '../services/departmentservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-departmentcomponent',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './departmentcomponent.html',
  styleUrls: ['./departmentcomponent.css'],
})
export class Departmentcomponent implements OnInit {

  private departmentservice=inject(Departmentservice);

  departments:Department[]=[];

  ngOnInit(): void {
    this.departmentservice.getdepartments().subscribe({
      next:(data)=>{
        console.log("API Response:",data);
        this.departments=data;
      },
      error:(error)=>{
        console.error("API Error:",error);
      }
    });
  }


}
