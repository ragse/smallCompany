import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { textUser } from '../constants/home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  configuration = textUser;
  formInfo!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.formInfo = new FormGroup ({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      service: new FormControl('', Validators.required),
    });
  }
}
