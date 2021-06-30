import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  registartions = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor() { }

  ngOnInit(): void {
  }
  deleteProduit(i: any) {
    this.registartions.splice(i, 1);
    localStorage.setItem('registration', JSON.stringify(this.registartions));
  }
}
