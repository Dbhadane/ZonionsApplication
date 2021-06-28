import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restapp } from '../model/restapp';
import { RestserviceService } from '../service/restservice.service';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {

  rest:Restapp []| any;
  id:number=0;
   constructor(private routes:Router,private route: ActivatedRoute,private restObj:RestserviceService) { }
 finalurl:any;
 url:any;
  ngOnInit(): void 
  {
     this.id = this.route.snapshot.params['id'];

      this.restObj.getRestById(this.id).subscribe(data => {

        this.rest = data;
        console.log(this.rest);
        this.finalurl = 'http://localhost:8080/api';
        this.url = `${this.finalurl}/${this.rest.id}/${this.rest.name}`;
      
    });
    console.log("I am in helper");
   
  }
  back()
  {
    this.routes.navigate(['home']);
  }
 
 

}
