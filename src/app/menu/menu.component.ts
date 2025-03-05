import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  backgroundImage:string='assets/bg2.jpg';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
