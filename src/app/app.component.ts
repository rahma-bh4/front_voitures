import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Voitures';
  constructor(public authService: AuthService,
    private router:Router
  ){}
  onLogout()
  {
    this.authService.logout();
  }
  ngOnInit () {
    this.authService.loadToken();
    if (this.authService.getToken()==null ||
     this.authService.isTokenExpired())
    this.router.navigate(['/login']);
    }
}
