import {Injectable} from '@angular/core';
import {Cookie} from '../cookie';

/**
 * Example of a cookie ==> id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
 */
@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  public setCookie(cookie: Cookie) {
    let expires = '';
    if (cookie.durationInDays) {
      const date = new Date();
      date.setTime(date.getTime() + (cookie.durationInDays * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = cookie.name + '=' + cookie.value + expires + '; path=/';
  }

  public getCookie(name: string): Cookie {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');

    cookies.forEach((cookie, index) => {
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }

      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    });

    return null;
  }
}
