import { Router } from '@angular/router';
import { AuthenticationService, ProductPayload, ProductDetails } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  details: ProductDetails
  product: ProductPayload = {
    _id: '',
    name: '',
    price: '',
    quantities: ''
  }
  

  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.auth.products().subscribe(
      product => {
        this.details = product        
      },
      err => {
        console.error(err)
      }
    )
  }

  registerProduct() {
    this.auth.registerProduct(this.product).subscribe(
      () => {
        this.router.navigateByUrl('/product')
      },
      err => {
        console.error(err)
      }
    )
  }

}
