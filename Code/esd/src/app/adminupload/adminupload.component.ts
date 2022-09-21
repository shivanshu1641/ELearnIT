import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminuploadService } from './adminupload.service';
@Component({
  selector: 'app-adminupload',
  templateUrl: './adminupload.component.html',
  styleUrls: ['./adminupload.component.css']
})
export class AdminuploadComponent implements OnInit {

  upload = new FormGroup({
    category : new FormControl(),
    title : new FormControl(),
    description : new FormControl(),
    markdown : new FormControl(),
  })
  upresp : any;
  //selectedFileList = (<HTMLInputElement>document.getElementById('myFile')).files; 
  //selectedFileList: String 
  constructor(private adminupload: AdminuploadService, public router: Router) { }

  ngOnInit(): void {
  }
  @ViewChild("fileInput") fileInput;
  uploadpro(){
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
      let fileToUpload = fi.files[0];
      //this.upload.controls.thefile = fileToUpload;
      let input = new FormData();
      input.append("thefile", fileToUpload);
      input.append("category", this.upload.controls.category.value)
      input.append("title", this.upload.controls.title.value)
      input.append("description", this.upload.controls.description.value)
      input.append("markdown", this.upload.controls.markdown.value)
      this.adminupload
          .postupload(input)
          .subscribe(res => {
              console.log(res);
          });
      }
    //console.log(this.upload.controls.thefile.value)
    //this.adminupload.postupload(this.upload.value).subscribe((Response)=>{
    //this.upresp = Response
    //})
  }

  adminhome(){
    this.router.navigateByUrl('/admin',{ state: { id:"admin" , status:'LoggedIn' } })
  }

}
