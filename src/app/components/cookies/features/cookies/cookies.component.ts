import { Component, OnInit } from '@angular/core';
import {CookiesService} from '../../services/cookies.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  constructor(cookiesService: CookiesService) { }

  ngOnInit(): void {
  }

}
