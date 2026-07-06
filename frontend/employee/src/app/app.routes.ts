import { Routes } from '@angular/router';
import { Employeecomponent } from './employeecomponent/employeecomponent';
import { Home } from './home/home';
import { Departmentcomponent } from './departmentcomponent/departmentcomponent';
import { Demo } from './demo/demo';
import { Parent1 } from './parent1/parent1';
import { Child1 } from './child1/child1';
import { RegisterComponent } from './registercomponent/registercomponent';



export const routes: Routes = [
{path:'',component: Home },
{path:'employee',component:Employeecomponent},
{path:'department',component:Departmentcomponent},
{path:'demo',component:Demo},
{path:'parent1',component:Parent1},
{path:'child1',component:Child1},
{path:'register1',component:RegisterComponent}

];
