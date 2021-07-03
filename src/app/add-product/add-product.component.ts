import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  submitted=false;
  profileForm=new FormGroup({
    nomProduit: new FormControl('',Validators.required),
    marqueProduit: new FormControl('',[Validators.required,Validators.minLength(8)]),
    catProduit: new FormControl('',[Validators.maxLength(9),Validators.required]),
    genreProduit: new FormControl('',[Validators.required]),
    prixProduit: new FormControl('',[Validators.required]),
    prixRedProduit:new FormControl('',Validators.required)
   // email: new FormControl(''),
  })

  constructor(private router :Router)  {}

  ngOnInit(): void {
  }
  addProd(){
    this.submitted=true;
    if (this.profileForm.invalid)
    {return};
     const registartions = JSON.parse(localStorage.getItem('registration') || '[]');
    registartions.push(this.profileForm.value);
    localStorage.setItem('registration', JSON.stringify(registartions));
    this.router.navigate(['/listProduct'])

  }
}
