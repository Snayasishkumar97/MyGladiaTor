import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {
  studentRegisterForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentRegisterForm = this.formBuilder.group({
      studentName: ['', Validators.required],
      studentAadhar: ['', Validators.required],
      studentEmail: ['', Validators.required, Validators.email],
      studentMobileNo: ['', Validators.required, Validators.maxLength(10)],
      studentGender: ['', Validators.required],
      studentDob: ['', Validators.required],
      studentInstituteName: ['', Validators.required]
    })
  }
  
  // convenience getter for easy access to form fields
  get reg(){
    return this.studentRegisterForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    
    if(this.studentRegisterForm.invalid){
      return;
    }
  }

  onReset(){
    this.submitted = false;
    this.studentRegisterForm.reset();
  }

}
