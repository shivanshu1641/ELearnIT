import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  constructor(private HttpClient:HttpClient) { }

  getProduct(){
    let url= "http://localhost:3000/data";
    return this.HttpClient.get(url)
  }

  deleteProduct(form:any){
    let url = `http://localhost:3000/data/?id=${form}`
    console.log(url,form)
    return this.HttpClient.delete(url);
  }
}
