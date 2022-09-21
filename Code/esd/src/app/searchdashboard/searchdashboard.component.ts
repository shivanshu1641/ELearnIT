import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';
import { SearchdashboardService } from './searchdashboard.service';

@Component({
  selector: 'app-searchdashboard',
  templateUrl: './searchdashboard.component.html',
  styleUrls: ['./searchdashboard.component.css','./assets/bootstrap/css/bootstrap.min.css',
  './assets/fonts/font-awesome.min.css','./assets/fonts/ionicons.min.css','./assets/css/Article-List.css','./assets/css/Features-Boxed.css',
  './assets/css/Footer-Basic.css','assets/css/Footer-Clean.css','./assets/css/Header-Blue.css','./assets/css/styles.css' 
]
})
export class SearchdashboardComponent implements OnInit {

  value = new FormGroup({
    search: new FormControl(),
  })
  name:String;
  category:String;
  resdata:any;
  search_resp:any;
  constructor(private searchdashboardservice:SearchdashboardService,public router:Router) { }
  ngOnInit(): void {
    this.name = history.state.user
    /*if(history.state.status != 'LoggedIn'){
      this.router.navigateByUrl('/home')
    }*/
    this.category=history.state.category
    //console.log(this.category)
  this.searchdashboardservice.getsearch(this.category).subscribe((Response)=>{
    this.resdata = Response
  })
  }

  dashboard(){
    this.router.navigateByUrl('/dashboard',{ state: { id:this.name , status:'LoggedIn' } })
  }

  search(){
    console.log(this.value.controls.search.value)
    this.searchdashboardservice.postsearch(this.value.value).subscribe((Response)=>{
      this.search_resp =Response
      console.log(this.search_resp[0].cat)
      //this.router.navigateByUrl("/searchproduct",{ state: { user:this.name , status:'LoggedIn', category:this.search_resp[0].cat,idf :this.search_resp[0].idf } })
    this.category = this.search_resp[0].cat
    history.state.category = this.search_resp[0].cat
    //console.log(this.category)
    this.ngOnInit()
    })
  }

}
