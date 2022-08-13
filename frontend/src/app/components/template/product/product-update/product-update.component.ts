import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {} as Product

  constructor(private productService : ProductService, private router: Router, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id') || ''
    this.productService.readById(id).subscribe(product => this.product = product)
  }

  updateProduct() {
    this.productService.update(this.product).subscribe(value => {
      this.productService.showMessage(`O produto ${value.name} foi atualizado!`)
      this.navigateToList()
    })
  }

  navigateToList(){
    this.router.navigate(['/products'])
  }
}
