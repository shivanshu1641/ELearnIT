import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./assets/bootstrap/css/bootstrap.min.css',
  './assets/fonts/font-awesome.min.css','./assets/fonts/ionicons.min.css','./assets/css/Article-List.css','./assets/css/Features-Boxed.css',
  './assets/css/Footer-Basic.css','assets/css/Footer-Clean.css','./assets/css/Header-Blue.css','./assets/css/styles.css' 
],
})
export class DashboardComponent implements OnInit {

  resdata:any;
  resbuy:any;
  constructor(private DashboardService: DashboardService, public router:Router) { }

  value = new FormGroup({
    search: new FormControl(),
  })
  search_resp :any;

  name:String;
  ngOnInit(): void {
    this.name = history.state.id;
    //console.log(history.state)
    if(history.state.status != 'LoggedIn'){
      this.router.navigateByUrl('/home')
    }
    this.DashboardService.getProduct().subscribe((Response)=>{
      this.resdata = Response;
    })
  }

  search(){
    console.log(this.value.controls.search.value)
    this.DashboardService.postsearch(this.value.value).subscribe((Response)=>{
      this.search_resp =Response
      console.log(this.search_resp[0].cat)
      this.router.navigateByUrl("/searchproduct",{ state: { user:this.name , status:'LoggedIn', category:this.search_resp[0].cat,idf :this.search_resp[0].idf } })
    })
  }

  buy(pro_id:any,amount:any,name:any){
    let buy = new FormData();
    buy.append("name", name);
    buy.append("product",pro_id);
    buy.append("amount",amount);
    buy.append("email", "shiv@gmail.com")
    buy.append("phone","7777777777")
      //console.log(this.resbuy)
    // this.router.navigateByUrl("/buy",{ state: { user:this.name , status:'LoggedIn', prodid:pro_id, amount:amount } })
  }

}
