import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor(private activatetRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }
  index: any;
  submitted=false;
  profileForm = new FormGroup({
    nomProduit: new FormControl('',Validators.required),
    marqueProduit: new FormControl('',[Validators.required,Validators.minLength(8)]),
    catProduit: new FormControl('',[Validators.maxLength(9),Validators.required]),
    genreProduit: new FormControl('',[Validators.required]),
    prixProduit: new FormControl('',[Validators.required]),
    prixRedProduit:new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    this.profileForm.patchValue(this.users[this.index])
    // this.profileForm = this.fb.group({
    //   nomProduit: [this.users[this.index].nomProduit],
    //   marqueProduit: [this.users[this.index].marqueProduit],
    //   catProduit: [this.users[this.index].catProduit],
    //   genreProduit: [this.users[this.index].genreProduit],
    //   prixProduit: [this.users[this.index].prixProduit],
    //   prixRedProduit: [this.users[this.index].prixRedProduit]
    // })
  }
  updateProduct() {
    this.submitted=true;
    if (this.profileForm.invalid)
    {return};
    //remplacer len nouveau object avec lancien objet
    this.users.splice(this.index, 1, this.profileForm.value);
    //mise a jour de localStorage
    localStorage.setItem('registration', JSON.stringify(this.users))
    //console.log('users=', this.users)
    //apres lupdate naviger vers le component listUser
    this.router.navigate(['/listProduct'])
  }
}

