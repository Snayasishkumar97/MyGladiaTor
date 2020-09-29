import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})
export class InstituteLoginComponent implements OnInit {
  instituteLoginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.instituteLoginForm = this.formBuilder.group({
      instituteDiseCode: ['', Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(11)],
      institutePassword: ['', Validators.required]
    })
  }

  get f() {
    return this.instituteLoginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.instituteLoginForm.invalid) {
      return;
    }
  }
  onReset() {
    this.submitted = false;
    this.instituteLoginForm.reset();
  }

}
