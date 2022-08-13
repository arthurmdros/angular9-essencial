import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {} as Product

  constructor(private productService : ProductService, private router: Router, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.actRouter.snapshot.paramMap.get('id') || ''
    this.productService.readById(id).subscribe(product => this.product = product)
  }

  deleteProduct(){
    this.productService.delete(this.product.id.toString()).subscribe(() => {
      this.productService.showMessage(`O produto ${this.product.name} foi deletado!`)
      this.navigateToList()
    })
  }

  navigateToList(){
    this.router.navigate(['/products'])
  }
}
