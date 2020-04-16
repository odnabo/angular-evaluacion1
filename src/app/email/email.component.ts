import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  correo = "";

  verCarro = false;
  
  constructor() { }

  ngOnInit() {
  }

  carritoCompras(){
    if(this.correo == ""){
      alert("Ingresa tu correo!")
    }else{
      this.verCarro = true;
    }
  }

}
