import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  imgUrl = "/assets/Images/Logo1.png";

  ngOnInit(): void {

    

  }

}
