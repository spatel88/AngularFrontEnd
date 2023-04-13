import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistraionService } from '../registraion.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = ''

  constructor(private service: RegistraionService,private router: Router) {

   }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log('response recived'),
        this.router.navigate(['/loginSuccess'])
      },
      Error => {
        this.msg = "Bad credentials, please enter valid emailid and password"
      }
    );
  }
}
