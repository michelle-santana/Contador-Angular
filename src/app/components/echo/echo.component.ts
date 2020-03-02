import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.css']
})
//texto usado também no html
export class EchoComponent implements OnInit {
  texto: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
