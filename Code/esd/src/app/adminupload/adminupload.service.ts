import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminuploadService {

  constructor(private HttpClient:HttpClient) { }

  postupload(input:any){
 
    let url = "http://localhost:3000/updata";

    console.log(input)
    return this.HttpClient.post(url,input)
  }
}
