import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restapp } from '../model/restapp';
import { RestserviceService } from '../service/restservice.service';

@Component({
  selector: 'app-updaterest',
  templateUrl: './updaterest.component.html',
  styleUrls: ['./updaterest.component.css']
})
export class UpdaterestComponent implements OnInit {

  id: number= 0;
 // rest: Restapp = new Restapp(0,"","","","","",false,);
 rest: Restapp = new Restapp();
  constructor(private restobj: RestserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      console.log(this.id);
    this.restobj.getRestById(this.id).subscribe(data => {
      this.rest = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.restobj.updateRest(this.id, this.rest).subscribe( data =>{
      console.log(data);
      this.router.navigate(['view']);
     
    }
    , error => console.log(error));
  }

  

}
