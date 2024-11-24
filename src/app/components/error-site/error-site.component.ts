import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-error-site',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './error-site.component.html',
  styleUrl: './error-site.component.css'
})
export class ErrorSiteComponent {

  constructor(private router:Router){

  }
  back(){
    this.router.navigate([''])

  }
}
