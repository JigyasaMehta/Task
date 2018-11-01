import {Component,OnInit} from "@angular/core";
import {Router} from '@angular/router';
import {ReactiveFormsModule, FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
    selector: 'form-comp',
    templateUrl: './form.component.html',
    styleUrls:['./form.component.css']
  })

  export class FormComponent
  { 
    
    myform: FormGroup;
    email: FormControl;
    password: FormControl;
    dropdownSelectedValue:string;
    onSubmitClicked:boolean;
    errorMessageForEmail:string;
    errorMessageForPassword:string;
    constructor(private router:Router)
    {this.dropdownSelectedValue="Advanced"}
    createFormControls() {
      
      this.email = new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        //Validators.email
        
      ]);
      this.password = new FormControl("", [
        Validators.required,
        Validators.pattern("(?=.*[A-Za-z])(?=.*[@*%#!^$&])[A-Za-z@*%#!^$&]{8,}")
      ]);
      
    }
  
    createForm() {
      this.myform = new FormGroup({
        email: this.email,
        password: this.password,
       });
    }
  
    ngOnInit() {
      this.createFormControls();
      this.createForm();
    }
  
    OnSubmit()
    {   
        if(this.myform.invalid && this.myform.touched)
        {
          if(confirm("Entered details are not valid. Please press OK to continue and enter valid details"))
          {this.myform.reset();this.onSubmitClicked=false;this.dropdownSelectedValue="Advanced";}
          else
          {
            this.onSubmitClicked=true;
            if(this.myform.controls.email.invalid)
            {this.errorMessageForEmail="Please enter a valid value for email"}
            if(this.myform.controls.password.invalid)
            {this.errorMessageForPassword="Please enter a valid value for password"}
          }
        }
        else
        {this.router.navigate(['./data', this.myform.controls.email.value,this.dropdownSelectedValue,this.myform.controls.password.value])}
        
    }

    OnClear()
    {
      if(this.myform.touched || this.myform.dirty)
      {
        if(confirm("Do you want to reset the form? All your data will be lost!"))
        {
          this.myform.reset();
          this.onSubmitClicked=false;
          this.dropdownSelectedValue="Advanced";
        }
        else
        {this.router.navigate(['']);
        }
      }
    }


  }