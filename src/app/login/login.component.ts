import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistraionService } from '../registraion.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();

  constructor(private service: RegistraionService) {

   }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data => console.log("response received")
    );
  }
}
