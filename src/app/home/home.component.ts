import { Component, OnInit } from '@angular/core';
import { textUser } from '../constants/home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  configuration = textUser;

  constructor() {

  }

  ngOnInit(): void {

  }
}
