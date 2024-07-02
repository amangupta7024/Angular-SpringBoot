import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private httpClient:HttpClient) {}

  employees: any[] = [];

  ngOnInit(): void {
    const baseURL = 'http://localhost:8082/getEmp';

    this.httpClient.get(baseURL).subscribe((response:any)=>{
      console.log(response);
      this.employees = response;
    },error=> {
      console.log("some errer occured");
    })
  }
  title = 'Demo';
}
