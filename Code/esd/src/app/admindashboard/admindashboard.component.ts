import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { DashboardService } from '../dashboard/dashboard.service';
import { AdmindashboardService } from './admindashboard.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css','./assets/bootstrap/css/bootstrap.min.css',
  './assets/fonts/font-awesome.min.css','./assets/fonts/ionicons.min.css','./assets/css/Article-List.css','./assets/css/Features-Boxed.css',
  './assets/css/Footer-Basic.css','assets/css/Footer-Clean.css','./assets/css/Header-Blue.css','./assets/css/styles.css' 
]
})
export class AdmindashboardComponent implements OnInit {

  resdata:any;
  resdelete:any;

  constructor(private admindashboardservice:AdmindashboardService ,public router:Router) { }

  name:String;
  ngOnInit(): void {
    this.name = history.state.id
    if(history.state.status != 'LoggedIn'){
      this.router.navigateByUrl('/home')
    }
    this.admindashboardservice.getProduct().subscribe((Response)=> {
      this.resdata = Response;
    })
  }

  deleteProduct(id:any){
    var res = this.admindashboardservice.deleteProduct(id).subscribe((Response)=>{
      this.resdelete = Response
      console.log(this.resdelete)
      this.ngOnInit()
    })
    
  }


}
