import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  public activeLang = 'en';

  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
  }

  public changeLanguage(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
