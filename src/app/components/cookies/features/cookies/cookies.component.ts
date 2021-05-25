import {Component, OnInit} from '@angular/core';
import {CookiesService} from '../../services/cookies.service';
import {Cookie} from '../../cookie';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  private cookiesService;
  public inputNameOfCookie: string;
  public inputValueOfCookie: string;

  constructor(cookiesService: CookiesService) { }

  ngOnInit(): void {
  }

  actionAddCookie($event: MouseEvent) {
    const cookie = new Cookie();
    cookie.name = this.inputNameOfCookie;
    cookie.value = this.inputNameOfCookie;
    console.log('Cookie erstellen: ' + JSON.stringify(cookie));
    // this.cookiesService.setCookie(cookie);
  }

  actionDeleteCookie() {
    console.log('Cookie löschen');
    // this.cookiesService.setCookie();
  }

  getCookies() {

  }
}
