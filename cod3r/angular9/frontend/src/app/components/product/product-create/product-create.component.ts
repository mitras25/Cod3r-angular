import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0,
  }

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void{
    this.ProductService.create(this.product).subscribe(()=>{
      this.ProductService.showMenssage('criado con Sucesso')
      this.router.navigate(['/products'])
    })
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
