import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  profileForm=new FormGroup({
    nomProduit: new FormControl(''),
    marqueProduit: new FormControl(''),
    catProduit: new FormControl(''),
    genreProduit: new FormControl(''),
    prixProduit: new FormControl(''),
    prixRedProduit:new FormControl('')
   // email: new FormControl(''),
  })

  constructor(private router :Router)  {}

  ngOnInit(): void {
  }
  addProd(){
    const registartions = JSON.parse(localStorage.getItem('registration') || '[]');
    registartions.push(this.profileForm.value);
    localStorage.setItem('registration', JSON.stringify(registartions));
    console.log('users=', registartions)
    this.router.navigate(['/listProduct'])

  }
}
