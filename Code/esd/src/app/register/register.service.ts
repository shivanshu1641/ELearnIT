import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private HttpClient: HttpClient) { }

  postEmployees(form_data: any){
    let url = "http://localhost:3000/register";
    console.log(form_data);
    return this.HttpClient.post(url,form_data);
  }
}
