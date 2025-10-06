import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isInfirstname: any;
  isphone: any;
  isemail: any;
  ngOnInit() {
    this.isInfirstname = sessionStorage.getItem('firstname');
    this.isphone = sessionStorage.getItem('phone');
    this.isemail = sessionStorage.getItem('email');
  }
}
