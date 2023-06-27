import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.css']
})
export class LoginComponent implements OnInit {
  form! :FormGroup;
  @Output() formSubmit :EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
    this.creatForm();
  }

  ngOnInit(): void {
  }

  creatForm(){
    this.form = new FormGroup({   
      email: new FormControl('',[Validators.required,Validators.email,]),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/)
      ]),
    });
  }

  onSubmit(form:FormGroup){
    this.formSubmit.emit(form.value);
  }

  invalidInput(value:AbstractControl | null):boolean| undefined{
        return value?.invalid && value.touched 
  }
}
