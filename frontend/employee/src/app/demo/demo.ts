import { CommonModule, CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {HoverDirective} from '../hover-directive';
import {Highlight} from '../highlight';
import {ActiveDirective} from '../active-directive';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl, Validators,FormBuilder, NgModel} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [HoverDirective,Highlight, ActiveDirective,FormsModule,UpperCasePipe,DatePipe,LowerCasePipe,CurrencyPipe,ReactiveFormsModule],
 // templateUrl: './demo.html',
  template: `<h1>RxJS Example</h1>`
})


export class Demo implements OnInit{

 ngOnInit(): void {

    const observable = new Observable((observer) => {
      observer.next("Hello");
      observer.next("Welcome");
      observer.next("To RxJS");
      observer.complete();
    });

    observable.subscribe(value => {
      console.log(value);
    });

  }
}

 /*     empform!: FormGroup;

  constructor(private fb: FormBuilder) {}

ngOnInit(): void {
  this.empform = this.fb.group({
    empname: [
      '',
      [Validators.required, Validators.minLength(3)]
    ],
    empemail: [
      '',
      [Validators.required, Validators.email]
    ],
    phonenumber: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ]
  });
}


employeeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  submit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    console.log(this.employeeForm.value);
    console.log(this.employeeForm.valid);
    console.log(this.employeeForm.invalid);
    console.log(this.employeeForm.touched);
    console.log(this.employeeForm.dirty);
  }





  message = '';
  name1 = "angular";
  price =200;

  today = new Date();

    showMessage() {
    this.message = 'Button Clicked!';
  }

    username = '';
    textColor = 'blue';
    fontSize = 30;


  isLoggedIn = false;
employees = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'David' }
];

status = 'pending';
isSuccess=false;
}

*/


