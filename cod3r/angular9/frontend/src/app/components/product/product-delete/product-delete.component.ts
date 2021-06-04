import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product ={
    name: "",
    price: 0,
  }

  constructor(
    private productServer: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productServer.readById(id).subscribe(product =>{
      this.product = product
    })
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productServer.delete(id).subscribe(()=>{
      this.productServer.showMenssage('Item Excluido com sucesso')
      this.router.navigate(["/products"]);
    }
    )}

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
