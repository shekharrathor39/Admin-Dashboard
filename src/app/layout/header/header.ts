import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {

    this.translate.setDefaultLang('en');

    this.translate.use('en');
  }

  changeLanguage(event: any) {
    const selectedLanguage = event.target.value;

    this.translate.use(selectedLanguage);
  }
}