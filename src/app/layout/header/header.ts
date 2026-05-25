import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  constructor(
    private translate: TranslateService,
    private router: Router           // ← added
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  changeLanguage(event: any) {
    this.translate.use(event.target.value);
  }

  logout() {
    localStorage.removeItem('token');     // ← clear token
    this.router.navigate(['/login']);     // ← go to login
  }
}