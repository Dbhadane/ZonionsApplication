import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restapp } from '../model/restapp';
import { RestserviceService } from '../service/restservice.service';

@Component({
  selector: 'app-viewerest',
  templateUrl: './viewerest.component.html',
  styleUrls: ['./viewerest.component.css']
})
export class ViewerestComponent implements OnInit {
  rest: Restapp[] = [];
  p:number=1;
  searchTxt!:string;
  constructor(private route:Router,private restObj:RestserviceService,private rou:ActivatedRoute) { }

  ngOnInit(): void {
    this.getRest();
  }
//get all records
  private getRest(){
    this.restObj.getRestaurentList().subscribe(data => {
      this.rest = data;
      console.log(this.rest);
      
    });
  }
//single record
  Onclick(id:number)
  {
    this.route.navigate(['helper',id])
  }
//update record
  updateRest(id: number)
  {
   
    this.route.navigate(['update',id],);
  }
//delete record
  deleteRest(id: number){
    this.restObj.deleteRest(id).subscribe( data => {
    
    })
    this.route.navigate(['home']);
  }
  //change status
  changeStatus(id: number)
  {
    this.restObj.UpdateStatus(id).subscribe( data => {
      console.log(data);
      this.getRest();
    })
    
  }
  


}
