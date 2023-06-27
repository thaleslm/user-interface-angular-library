import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form!: FormGroup;
  @Output() formSubmit :EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.creatForm();
  }
  creatForm(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(4)]),
      username : new FormControl('', [Validators.required,Validators.maxLength(30)] ),
      email: new FormControl('',[Validators.required,Validators.email,]),
      dateOfBirth: new FormControl('2023-06-14T20:39:56.336Z'),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/),
      ]),
    });
  }
  onSubmit(form:FormGroup){
  this.formSubmit.emit(form.value)
  }
  invalidInput(value:AbstractControl | null):boolean| undefined{
        return value?.invalid && value.touched 
  }
}
