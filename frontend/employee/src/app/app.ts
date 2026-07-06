import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Home } from './home/home';
import { Demo } from './demo/demo';
import { Parentcomponent } from './parentcomponent/parentcomponent';
import { Childcomponent } from './childcomponent/childcomponent';

import { Parent1 } from './parent1/parent1';
import { Child1 } from './child1/child1';
import { RegisterComponent } from './registercomponent/registercomponent';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Home,Demo,Parent1,Child1,RegisterComponent],

  
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('employee');
  empName = 'Keerthi';
  empEmail = 'keerthi@example.com';
  empSalary = 50000;
  empStatus = true;
}
