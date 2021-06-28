import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restapp } from '../model/restapp';
import { RestserviceService } from '../service/restservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rest: Restapp[] = [];
  searchTxt!:string;
  constructor(private restObj:RestserviceService,private route:Router) { }

  ngOnInit(): void {
    this.getRest();
  }

  private getRest(){
    this.restObj.getRestaurentList().subscribe(data => {
      console.log(data);
      this.rest = data;
    });

    
}
  Onclick(id:Number)
    {
      this.route.navigate(['helper',id])
    }
}