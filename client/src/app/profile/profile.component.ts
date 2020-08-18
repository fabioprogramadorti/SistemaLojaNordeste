import { AuthenticationService, UserDetails } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    const current = this.auth.getUserDetails()
    this.auth.profile(current.uid).subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }

}
