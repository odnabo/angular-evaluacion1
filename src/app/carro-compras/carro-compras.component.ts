import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent implements OnInit {


  productos = [
    { codigo: 1, item : "Gorro Lana" , precio: 10000, url : "https://instagram.fscl6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/93691665_261475221919526_1644156606003906971_n.jpg?_nc_ht=instagram.fscl6-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=CklhQyj7TyUAX8omJ4i&oh=8cde3eff5a733023c9d6703c6a154366&oe=5EC20C89" },
    { codigo: 2, item : "Amigurumi" , precio: 15000, url : "https://instagram.fscl6-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.120.960.960a/s240x240/93244830_705971716876550_5553242602983644510_n.jpg?_nc_ht=instagram.fscl6-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=biDIdHTIwE8AX_B1H_A&oh=80062f044cb894389a3fff4a4abf6827&oe=5EC0CF09" }
  ];


  carrito = [];

  borrando = true;

  suma = 0;

  constructor() { }

  ngOnInit() {
  }


  agregar(nombre){
    this.carrito.push(nombre);
  }

  eliminar(index){
    console.log(this.carrito)
    delete this.carrito[index];  
    console.log(this.carrito)
  }
}
