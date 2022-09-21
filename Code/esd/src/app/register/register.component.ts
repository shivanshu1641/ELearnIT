import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./assets/css/style.css','./assets/fonts/material-icon/css/material-design-iconic-font.min.css']
})
export class RegisterComponent implements OnInit {

  addCust = new FormGroup({
    username: new FormControl(),
    password : new FormControl(), 
    cpassword : new FormControl(),
    cbox : new FormControl() 
  })

  addResp: any;
  constructor(private RegisterService: RegisterService) {  }

  ngOnInit(): void {
  }

  addCustomer(){
    if(this.addCust.controls.cbox.value == false){
      alert("Please accept our terms and conditions");
    }
    else if(this.addCust.controls.password.value != this.addCust.controls.cpassword.value){
      alert("Please check the Confirm Password");
    }
    else if(this.addCust.controls.password.value == this.addCust.controls.cpassword.value && this.addCust.controls.cbox.value == true  ){
    console.log(this.addCust.value)}

    this.RegisterService.postEmployees(this.addCust.value).subscribe((Response) =>{
      this.addResp = Response;
      alert(this.addResp.message)
    })
  }
}
