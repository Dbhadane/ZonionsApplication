import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Restapp } from '../model/restapp';
import { RestserviceService } from '../service/restservice.service';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {

  rest: Restapp = new Restapp();
  file: any;
  restData: any;
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private restObj: RestserviceService,
    private httpClient: HttpClient, private route:Router) {
    this.form = fb.group({
      mobileNumber: ['', [Validators.required]],
      restName: ['', [Validators.required]],
      addr: ['', [Validators.required]],
      myTimePicker: ['', [Validators.required]],
      myTimePickerc: ['', Validators.required],
    })

  }

  ngOnInit(): void {

  }
  get f() {
    return this.form.controls;
  }
 
  submit(): void {
    this.restObj.addRest(this.rest)
      .subscribe(data => {
        this.restData=data;
        console.log(this.restData);
        alert("Restaurent Added successfully.");
        
      });

  };

  uploadFile() {
    console.log('I am in upload' + this.file);
    console.log(this.restData.id)
    this.restObj.addImageInResto(this.file, this.restData.id).subscribe(
      (data: any) => {
        this.route.navigate(['view']);
      },
      (error: any) => console.log(error)
    );
   
  }
  onFileChangeEvent(file: any) {
    this.file = file;
    console.log('file change event=', this.file);
  }
}


