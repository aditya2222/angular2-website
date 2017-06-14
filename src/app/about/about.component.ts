import { Component, OnInit } from '@angular/core';
import { MdCardModule } from "@angular/material";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

 data: any;
  images: any[];

    constructor() {
        this.data = {
            labels: ['A','B','C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
this.images = [];
        this.images.push({source:'../assets/images/1.png', thumbnail: '../assets/images/2.png', title:'Sopranos 1'});
        this.images.push({source:'../assets/images/1.png',thumbnail: '../assets/images/2.png', title:'Sopranos 2'});
        this.images.push({source:'../assets/images/1.png', thumbnail: '../assets/images/2.png', title:'Sopranos 3'});
        this.images.push({source:'../assets/images/1.png', thumbnail: '../assets/images/2.png', title:'Sopranos 4'});
         this.images.push({source:'../assets/images/1.png', thumbnail: '../assets/images/2.png', title:'Sopranos 1'});
        this.images.push({source:'../assets/images/1.png',thumbnail: '../assets/images/2.png', title:'Sopranos 2'});
        this.images.push({source:'../assets/images/1.png', thumbnail: '../assets/images/2.png', title:'Sopranos 3'});
      
    



    }
     
}


