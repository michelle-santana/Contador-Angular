import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  n: number = 0

  constructor() { }

  aumentar(){
    this.n++;
  }

  diminuir(){
    if(this.n !== 0){
    this.n--
  } else {
    this.n;
  }
}

  ngOnInit(): void {
  }

}
