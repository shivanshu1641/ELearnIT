import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  checkCusto(form_data:any){
    let url ="http://localhost:3000/login";
    console.log(form_data)
    return this.HttpClient.post(url,form_data);
  }
}
