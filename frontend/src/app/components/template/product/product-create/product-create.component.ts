import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService : ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct() {
    if(this.product.name === ''){
      this.productService.showMessage(`Nome é obrigatório!`)
    }else{
      this.productService.create(this.product).subscribe(value => {
        this.productService.showMessage(`O produto ${value.name} foi criado!`)
        this.navigateToList()
      })
    }
  }

  navigateToList(){
    this.router.navigate(['/products'])
  }
}
