import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

export interface SliderItem {

  title: string;
  imageUrl: string;

}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 

    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  logoUrl = "/assets/Images/Logo.png";
  logo1Url = "/assets/Images/Logo1.png";
  shawarmaUrl = "/assets/Images/Shawarma.png";
  pizzaUrl = "/assets/Images/Pizza.png";
  burgerUrl = "/assets/Images/Burger.png";
  hotdogUrl = "/assets/Images/Hotdog.png";
  francoisUrl = "/assets/Images/Francois.jpg";
  
  ngOnInit(): void {
  }

}
