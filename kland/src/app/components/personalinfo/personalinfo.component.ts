import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personalinfo',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './personalinfo.component.html',
  styleUrl: './personalinfo.component.scss'
})
export class PersonalinfoComponent {
  personalInfoForm !: FormGroup;
  isInfirstname: any;
  lastname: any;
  isphone: any;
  isemail: any;
  password: any;
  countries = [
    { name: 'Kuwait', code: '965' },
    { name: 'India', code: '91' },
    { name: 'United States', code: '1' },
    { name: 'United Kingdom', code: '44' },
    { name: 'Canada', code: '1' },
    { name: 'Australia', code: '61' },
    { name: 'Germany', code: '49' },
    { name: 'France', code: '33' },
    { name: 'Saudi Arabia', code: '966' },
    { name: 'UAE', code: '971' },
    { name: 'Singapore', code: '65' },
    { name: 'Japan', code: '81' },
    { name: 'China', code: '86' }
  ];

  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    debugger
    this.personalInfoForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      oldPassword: [''],
      countryCode: ['965']
    });

    setTimeout(() => {
      this.personalInfoForm.patchValue({
        firstName: sessionStorage.getItem('firstname') || '',
        lastName: sessionStorage.getItem('lastname') || '',
        email: sessionStorage.getItem('email') || '',
        phoneNumber: sessionStorage.getItem('phone') || '',
        oldPassword: sessionStorage.getItem('password') || '',
        countryCode: sessionStorage.getItem('countryCode') || '965',
      });
    });
  }
  onSubmit() {

  }
}
