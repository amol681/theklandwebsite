import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router:Router, private toaster:ToastrService){}
logout(){
  sessionStorage.clear();
  this.router.navigate(['/login']);
  this.toaster.success('login successfully...!');
}
}
