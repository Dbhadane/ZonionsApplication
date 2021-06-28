import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http'
import { Restapp } from '../model/restapp';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestserviceService {
  

  private mainurl="http://localhost:8080/api";
  constructor(private httpClient: HttpClient) { }

  public addRest(restaurent:any) 
  {
    return this.httpClient.post(`${this.mainurl}/add`, restaurent);
  }
  getRestaurentList(): Observable<Restapp[]>{
    return this.httpClient.get<Restapp[]>(`${this.mainurl}/allrest`);
  }
  
  deleteRest(id: number): Observable<Object>{
   
    return this.httpClient.delete(`${this.mainurl}/delete/${id}`);

  }
  getRestById(id: number): Observable<Restapp>{
    return this.httpClient.get<Restapp>(`${this.mainurl}/rest/${id}`);
  }
  updateRest(id: number, restaurent: Restapp): Observable<Object>{
    return this.httpClient.put(`${this.mainurl}/rest/${id}`, restaurent);
  }
  UpdateStatus(id: number): Observable<Restapp>{
    return this.httpClient.get<Restapp>(`${this.mainurl}/rest/statuschange/${id}`);
  }

  //image
  public addImageInResto(file: any,id:number):any{
    let target:DataTransfer=<DataTransfer>(file.target);
    let fileList:FileList=target.files;
    let filel:File=fileList[0];
    const formdata: FormData = new FormData();
    formdata.append('file',filel,filel.name);
    console.log("formdata in service",formdata)
   formdata.append('file', file);
   console.log("Id in addImage service method"+ id)
    const req = new HttpRequest('PUT', `${this.mainurl}/restImg/${id}`, formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    );
    console.log("request object in service",req)
    console.log(req);
    return this.httpClient.request(req);
  }

}
