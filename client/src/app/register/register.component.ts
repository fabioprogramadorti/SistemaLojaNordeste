import { AuthenticationService, TokenPayload } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: TokenPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/login");
      },
      err => {
        console.error(err);
      }
    );
  }

}
