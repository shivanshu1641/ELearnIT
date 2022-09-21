import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private HttpClient: HttpClient) { }

  getProduct(){
    let url= "http://localhost:3000/data";
    return this.HttpClient.get(url)
  }

  postsearch(search){
    let url = "http://localhost:3000/search"
    return this.HttpClient.post(url,search)
  }

  
}
