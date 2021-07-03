import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  profileForm = new FormGroup({
    nomProduit: new FormControl(''),
    marqueProduit: new FormControl(''),
    catProduit: new FormControl(''),
    genreProduit: new FormControl(''),
    prixProduit: new FormControl(''),
    prixRedProduit: new FormControl('')
  })
  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    this.profileForm = this.fb.group({
      nomProduit: [this.users[this.index].nomProduit],
      marqueProduit: [this.users[this.index].marqueProduit],
      catProduit: [this.users[this.index].catProduit],
      genreProduit: [this.users[this.index].genreProduit],
      prixProduit: [this.users[this.index].prixProduit],
      prixRedProduit: [this.users[this.index].prixRedProduit]
    })
  }
  updateUser() {
    //remplacer len nouveau object avec lancien objet
    this.users.splice(this.index, 1, this.profileForm.value);
    //mise a jour de localStorage
    localStorage.setItem('registration', JSON.stringify(this.users))
    //console.log('users=', this.users)
    //apres lupdate naviger vers le component listUser
    this.router.navigate(['/listProduct'])
  }
}

